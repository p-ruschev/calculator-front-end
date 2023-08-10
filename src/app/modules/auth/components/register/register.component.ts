import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { confirmPassword } from '../../validators/confirm-password.validator'
import { take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from 'src/app/shared/components/loading-dialog/loading-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  hidePass: boolean = true;
  hideRePass: boolean = true;
  isRegistering!: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
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
  }

  get rePasswordFormControl(): FormControl {
    return this.form.get('rePassword') as FormControl;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      rePassword: ['', [Validators.required, confirmPassword('password')]]
    })
  }

  redirectTo(route: string[]): void {
    this.router.navigate(route);

  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.value.password;
      const action = 'register';
      const loadingDialog = this.matDialog.open(LoadingDialogComponent, {
        data: 'Registering an account and logging in'
      })

      loadingDialog.afterOpened()
        .subscribe(
          () => {
            this.isRegistering = true;
            this.authService.auth(email, password, action)
              .pipe(take(1))
              .subscribe({
                next: (response: User) => {
                  this.isRegistering = false;
                  loadingDialog.close();
                  localStorage.setItem('token', response.token);
                  this.router.navigate(['/', 'calculator']);
                },
                error: (error: HttpErrorResponse) => {
                  loadingDialog.close();
                  this.isRegistering = false;
                  if (error.status === 403) {
                    this.matSnackBar.open('This email is already registered', undefined, {
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
        )
    }
  }

}
