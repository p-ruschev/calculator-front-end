import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-variable-dialog',
  templateUrl: './add-variable-dialog.component.html',
  styleUrls: ['./add-variable-dialog.component.scss']
})
export class AddVariableDialogComponent {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddVariableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      customVariable: [null, [Validators.required, Validators.maxLength(16), Validators.pattern('^[a-zA-Zа-яА-Я-]+$')]],
    })
  }

}
