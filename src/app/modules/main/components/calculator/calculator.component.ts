import { Component } from '@angular/core';
import { Button } from '../../models/button.model';
import { buttons } from '../../constants/constants'
import { animate, style, transition, trigger } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { GuideComponent } from '../guide/guide.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MainService } from '../../services/main.service';
import { take } from 'rxjs';
import { FormulaInputDialogComponent } from '../formula-input-dialog/formula-input-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expression } from '../../models/expression.model';
import { UserService } from '../../../../shared/services/user.service';

@Component({
    selector: 'app-calculator',
    animations: [
        trigger(
            'enterAnimation', [
            transition(':enter', [
                style({ height: '0px', opacity: 0 }),
                animate('300ms ease-in', style({ height: '360px', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ height: '360px', opacity: 1 }),
                animate('300ms ease-in', style({ height: '0px', opacity: 0 }))
            ])
        ]
        )
    ],
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    buttons: Button[] = buttons;
    history: Expression[] = [];
    showHistory: boolean = true;
    input: string[] = [];
    formula: string[] = [];
    operators: string[] = ['+', '-', '*', '/', '**']
    variables: string[] = ['a', 'b', 'c', 'd'];
    searchValue: string = '';
    evaluationErrorMsg: string = '';
    customVariables: string[] = [];
    powerModes: number = 0;

    constructor(
        public matDialog: MatDialog,
        private mainService: MainService,
        private matSnackBar: MatSnackBar,
        public userService: UserService
    ) { }

    get isFunction(): boolean {
        if (this.customVariables.length) {
            return true;
        }
        for (let i = 0; i < this.variables.length; i++) {
            if (this.formula.includes(this.variables[i])) {

                return true;
            }
        }

        return false;
    }

    private updateFormulaAndInput(data: string | Button): void {
        this.input.push(typeof data === 'string' ? data : data.symbol)
        this.formula.push(typeof data === 'string' ? data : data.value)
    }

    private openFormulaInputDialog(formulaStr: string): void {
        this.matDialog.open(FormulaInputDialogComponent, {
            data: {
                formulaStr,
                formula: this.formula,
                variables: this.customVariables.length ? this.customVariables : this.variables,
                input: this.input
            }
        });
    }

    private handleReturn(): void {
        let formulaStr = this.formula.join('')
        this.powerModes = 0;

        if (!this.formula.length) return;

        if (this.isFunction) {
            this.openFormulaInputDialog(formulaStr);

            return;
        };

        try {
            const strToNum = new Function(`return ${formulaStr}`)();
            const result = parseFloat(strToNum.toFixed(6));

            this.history.unshift({
                input: this.input,
                formula: this.formula,
                result: result,
            })
            this.input = [`${result}`];
            this.formula = [`${result}`];
            this.powerModes = 0;
        } catch (error) {
            this.evaluationErrorMsg = 'This expression can not be evaluated';

            setTimeout(() => { this.evaluationErrorMsg = '' }, 3000)
        }
    }


    private handleBackspace(): void {
        const last = this.input[this.input.length - 1]

        if (last === '</sup>') {
            let stepsToRemove = 0;

            for (let i = this.input.length - 1; i >= 0; i--) {
                if (this.input[i] === '</sup>') {
                    stepsToRemove++;
                    console.log(stepsToRemove);
                } else {
                    break;
                }
            }

            this.powerModes = stepsToRemove;

            for (let i = stepsToRemove; i > 0; i--) {
                this.input.pop()
                this.formula.pop()
            }
        }

        if (last === '<sup>(') {
            this.powerModes--;
        };

        this.input.pop();
        this.formula.pop();
    }

    addPower(): void {
        this.input.push('<sup>(');
        this.formula.push('**(');
        this.powerModes++;
    }

    removePower(): void {
        const last = this.input[this.input.length - 1]

        if (this.powerModes === 0) return;

        if (last === '<sup>(') {
            this.input.pop()
            this.formula.pop()
            this.powerModes--;

            return;
        }

        if (last !== ')') {
            this.input.push(')</sup>')
            this.formula.push(')')
            this.powerModes--;

            return;
        }

        this.input.push('</sup>')
        this.formula.push('')
        this.powerModes--;
    }

    onPress(event: Button): void {

        if (event.type === 'return') {
            this.handleReturn();
            return;
        }

        if (event.type === 'backspace') {
            this.handleBackspace();
            return;
        }

        if (event.type === 'all-clear') {
            this.input = [];
            this.formula = [];
            this.customVariables = [];
            this.variables = ['a', 'b', 'c', 'd'];
            this.powerModes = 0;

            return;
        }

        this.updateFormulaAndInput(event);
    }

    openSaveEstimationDialog(estimation: Expression): void {
        const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
            data: {
                type: 'save',
                text: 'Are you sure you want to save this estimation',
                comment: '',
                expression: estimation
            },
            autoFocus: "false"
        })

        dialogRef.afterClosed().subscribe({
            next: (result: string | boolean) => {
                if (typeof result === 'string') {
                    estimation.comment = result;

                    this.mainService.save(estimation, 'estimations')
                        .pipe(take(1))
                        .subscribe({
                            next: () => {
                                this.matSnackBar.open('Estimation has been saved successfully', undefined, {
                                    duration: 4000,
                                    panelClass: 'success'
                                });
                            },
                            error: () => {
                                this.matSnackBar.open('Something went wrong, currently this estimation can not be saved',
                                    undefined, {
                                    duration: 4000
                                });
                            }
                        })
                }
            }
        })
    }

    openHelp(): void {
        this.matDialog.open(GuideComponent)
    }

    clearCurrentHistory(): void {
        this.history = [];
    }

    pickExpression(event: Expression): void {
        this.formula = [...event.formula];
        this.input = [...event.input];

        if (event.variables) {
            this.customVariables = event.variables;
        }
    }

    pickVariable(variable: string): void {
        this.updateFormulaAndInput(variable)
    }

    addCustomVariable(variable: string): void {
        if (!this.variables.includes(variable)) {
            this.variables.push(variable);
        }
        this.pickVariable(variable);
    }

}
