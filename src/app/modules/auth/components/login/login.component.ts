import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/shared/components/loading-dialog/loading-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide: boolean = true;
  isLogging!: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  get emailFormControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.form.get('password') as FormControl;
  };

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    })

  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      const action = 'login';
      const loadingDialog = this.matDialog.open(LoadingDialogComponent, {
        data: 'Logging'
      })

      loadingDialog.afterOpened()
        .subscribe(
          () => {
            this.isLogging = true;
            this.authService.auth(email, password, action)
              .pipe(take(1))
              .subscribe({
                next: (response: User) => {
                  this.isLogging = false;
                  loadingDialog.close();
                  localStorage.setItem('token', response.token);
                  this.router.navigate(['/', 'calculator']);
                },
                error: (error: HttpErrorResponse) => {
                  loadingDialog.close();
                  this.isLogging = false;
                  if (error.status === 403) {
                    this.matSnackBar.open('Invalid credentials', undefined, {
                      duration: 4000
                    });
                  } else {
                    this.matSnackBar.open('Something went wrong', undefined, {
                      duration: 4000
                    });
                  }
                }
              });
          }
        );
    }
  }
}
