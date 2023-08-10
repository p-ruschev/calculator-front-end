import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expression } from '../../../models/expression.model';

@Component({
  selector: 'app-saved-formulas',
  templateUrl: './saved-formulas.component.html',
  styleUrls: ['./saved-formulas.component.scss']
})
export class SavedFormulasComponent {

  @Input() searchValue!: string;
  @Output() onPickFormula = new EventEmitter<any>();

  formulas!: Expression[];
  filteredFormulas!: Expression[];
  isLoading: boolean = false;
  menuOpened: boolean = false;

  constructor(
    private mainService: MainService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllFormulas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchValue'] && this.formulas) {
      this.filteredFormulas = this.formulas.filter((f: Expression) => {
        if (f.input.join('').includes(this.searchValue)) {
          return true;
        }

        if (f.comment && f.comment.includes(this.searchValue)) {
          return true;
        }

        return false;
      })
    }
  }


  private getAllFormulas(): void {
    this.isLoading = true;
    this.mainService.getAll('formulas')
      .pipe(take(1))
      .subscribe({
        next: (r: Expression[]) => {
          this.formulas = r;
          this.filteredFormulas = r;

        },
        error: () => {
          this.matSnackBar.open(
            'Something went wrong, these resources can not be reached at the moment',
            undefined, {
            duration: 4000
          })
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  openDeletionDialog(expression: Expression): void {
    const data = {
      expression, type: 'deletion',
      text: 'Are you sure you want to delete this formula',
      formula: true
    };
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data,
    });

    dialog.afterClosed()
      .subscribe({
        next: (result: boolean) => {
          if (expression._id && result) {
            this.mainService.delete(expression._id, 'formulas')
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.matSnackBar.open('Formula has been deleted successfully', undefined, {
                    duration: 4000
                  });
                  this.getAllFormulas();
                },
                error: () => {
                  this.matSnackBar.open(
                    'Something went wrong, currently this estimation can not be deleted',
                    undefined, {
                    duration: 4000
                  })
                }
              })
          }
        }
      })
  }

  openEditDialog(expression: Expression): void {
    const data = { expression, type: 'edit', text: 'Currently you can only edit the comment', comment: expression.comment };
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data: { ...data, formula: true  },
      autoFocus: "false"
    });

    dialog.afterClosed()
      .subscribe({
        next: (result: string | boolean) => {
          if (typeof result === 'string') {
            const editData = { ...expression, comment: result }

            this.mainService.edit(editData, 'formulas')
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.matSnackBar.open('Formula has been edited successfully', undefined, {
                    duration: 4000
                  });
                  this.getAllFormulas();

                },
                error: () => {
                  this.matSnackBar.open(
                    'Something went wrong, currently this formula can not be edited',
                    undefined, {
                    duration: 4000
                  })
                }
              })
          }
        },
      })
  }

  copyToScreen(formula: Expression): void {
    this.onPickFormula.emit(formula);
  }

  handleHover(el: HTMLElement): void {
    el['hidden'] = this.menuOpened ? !el['hidden'] : el['hidden'];
    this.menuOpened = !this.menuOpened;
  }
}
