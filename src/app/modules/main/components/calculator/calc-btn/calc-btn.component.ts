import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVariableDialogComponent } from '../add-variable-dialog/add-variable-dialog.component';

@Component({
  selector: 'app-calc-btn',
  templateUrl: './calc-btn.component.html',
  styleUrls: ['./calc-btn.component.scss']
})
export class CalcBtnComponent {

  @Input() button: any;
  @Input() functionCreation: any;
  @Input() isFunction!: boolean;
  @Input() variables!: string[];
  @Input() powerModes!: number;
  @Output() onPress = new EventEmitter<any>();
  @Output() onPickVariable = new EventEmitter<any>();
  @Output() onAddCustomVariable = new EventEmitter<any>();
  @Output() onAddPower = new EventEmitter<any>();
  @Output() onRemovePower = new EventEmitter<any>();

  constructor(private matDialog: MatDialog) { }

  clicked: boolean = false;

  btnPress(): void {
    if (this.button.type !== 'power') {
      this.onPress.emit(this.button);
    }
  }

  addPower(): void {
    this.onAddPower.emit();
  }

  removePower(): void {
    this.onRemovePower.emit();
  }

  addVariable(variable: string): void {
    this.onPickVariable.emit(variable);
  }

  openAddVarDialog(): void {
    const addVarDialog = this.matDialog.open(AddVariableDialogComponent, {autoFocus: "false"})

    addVarDialog.afterClosed().subscribe({
      next: (variable: string | boolean) => {
        if (typeof variable === 'string') {
          this.onAddCustomVariable.emit(variable);
        }
      }
    })
  }

}
