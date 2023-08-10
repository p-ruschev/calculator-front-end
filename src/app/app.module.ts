import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingDialogComponent } from './shared/components/loading-dialog/loading-dialog.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProvider } from './core/interceptors/auth.interceptor';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        LoadingDialogComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        AppRoutingModule,
        MatMenuModule,
        HttpClientModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [AuthInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
