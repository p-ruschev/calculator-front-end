import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expression } from '../../../models/expression.model';

@Component({
  selector: 'app-saved-estimations',
  templateUrl: './saved-estimations.component.html',
  styleUrls: ['./saved-estimations.component.scss']
})
export class SavedEstimationsComponent implements OnInit {

  @Input() searchValue!: string;
  @Output() onPickEstimation = new EventEmitter<any>();

  estimations!: Expression[];
  filteredEstimations: any;
  isLoading: boolean = false;
  menuOpened: boolean = false;

  constructor(
    private mainService: MainService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllEstimations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchValue'] && this.estimations) {
      this.filteredEstimations = this.estimations.filter((e: any) => {
        if (e.input.join('').includes(this.searchValue)) {
          return true;
        }

        if (e.result.toString().includes(this.searchValue)) {
          return true;
        }

        if (e.comment && e.comment.includes(this.searchValue)) {
          return true;
        }

        return false;
      })
    }
  }

  private getAllEstimations(): void {
    this.isLoading = true;

    this.mainService.getAll('estimations')
      .pipe(take(1))
      .subscribe({
        next: (r: Expression[]) => {
          this.estimations = r;
          this.filteredEstimations = r;
        },
        error: () => {
          this.matSnackBar.open('Something went wrong, these resources can not be reached at the moment', undefined, {
            duration: 4000
          })
        },
        complete: () => {
          this.isLoading = false;
        }
      })
  }

  openDeletionDialog(expression: Expression): void {
    const data = { expression, type: 'deletion', text: 'Are you sure you want to delete this estimation' };
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data
    });

    dialog.afterClosed()
      .subscribe({
        next: (result: boolean) => {
          if (expression._id && result) {
            this.mainService.delete(expression._id, 'estimations')
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.matSnackBar.open('Estimation has been deleted successfully', undefined, {
                    duration: 4000
                  });
                  this.getAllEstimations();
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
    const data = { expression: expression, type: 'edit', text: 'Currently you can only edit the comment', comment: expression.comment };
    const dialog = this.matDialog.open(ConfirmDialogComponent, {
      data,
      autoFocus: "false"
    });

    dialog.afterClosed()
      .subscribe({
        next: (result: string | boolean) => {
          if (typeof result === 'string') {
            const editData = { ...expression, comment: result }

            this.mainService.edit(editData, 'estimations')
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.matSnackBar.open('Estimation has been edited successfully', undefined, {
                    duration: 4000
                  });
                  this.getAllEstimations();
                },
                error: () => {
                  this.matSnackBar.open('Something went wrong, currently this estimation can not be edited', undefined, {
                    duration: 4000
                  })
                }
              })
          }
        }
      })
  }

  copyToScreen(estimation: Expression): void {
    this.onPickEstimation.emit(estimation);
  }

  handleHover(el: HTMLElement): void {
    el['hidden'] = this.menuOpened ? !el['hidden']: el['hidden'];
    this.menuOpened = !this.menuOpened;
  }

}
