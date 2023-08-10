
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
    ],
    imports: [
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        AuthRoutingModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AuthComponent]
})
export class AuthModule { }
