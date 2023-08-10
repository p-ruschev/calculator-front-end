import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MainService } from '../../services/main.service';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formula-input-dialog',
  templateUrl: './formula-input-dialog.component.html',
  styleUrls: ['./formula-input-dialog.component.scss']
})
export class FormulaInputDialogComponent implements OnInit {

  variables: string[] = [];
  form: FormGroup = this.fb.group({});
  operators: string[] = ['+', '-', '*', '/', '**']
  result!: number;
  resultArray: string[] = [...this.data.formula];
  evaluationErrorMsg: string = '';

  constructor(
    public dialogRef: MatDialogRef<FormulaInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private mainService: MainService,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.extractVariables();
  }

  private extractVariables(): void {
    this.data.variables.forEach((v: string) => {
      if (this.data.formula.includes(v)) {
        this.variables.push(v);
      }
    })

    this.variables.forEach((v: string) => this.form.addControl(v, this.fb.control(null, Validators.required)))
  }

  private substituteVariables(): void {
    for (let i = 0; i < this.variables.length; i++) {
      const variable = this.variables[i];

      this.data.formula.forEach((el: string, i: number) => {
        if (el === variable) {
          this.resultArray.splice(i, 1, this.form.controls[variable].value.toString())
        }
      })
    }
  }

  private handleReturn(): void {
    let formulaStr = this.resultArray.join('')
    console.log(formulaStr);
    try {
      const strToNum = new Function(`return ${formulaStr}`)();
      this.result = parseFloat(strToNum.toFixed(6));
    } catch (error) {
      this.evaluationErrorMsg = 'This expression can not be evaluated';

      setTimeout(() => { this.evaluationErrorMsg = '' }, 4000)
    }
  }

  test(): void {
    this.substituteVariables();
    this.handleReturn();
  }

  save(): void {
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data: {
        type: 'save',
        text: 'Are you sure you want to save this formula',
        comment: '',
        expression: this.data,
        formula: true
      },
      autoFocus: "false"
    })

    dialog.afterClosed()
      .subscribe({
        next: (result: string | boolean) => {
          if (typeof result === 'string') {
            const formula = { ...this.data, comment: result, variables: this.variables }
            console.log(formula)
            this.mainService.save(formula, 'formulas')
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.matSnackBar.open('Formula has been saved successfully', undefined, {
                    duration: 4000
                  });
                },
                error: () => {
                  this.matSnackBar.open('Something went wrong, formula can not be saved at the moment', undefined, {
                    duration: 4000
                  });
                }
              })
          }
        }
      })
  }
}
