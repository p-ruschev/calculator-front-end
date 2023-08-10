import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { GuideComponent } from './components/guide/guide.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CalcBtnComponent } from './components/calculator/calc-btn/calc-btn.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { SavedEstimationsComponent } from './components/calculator/saved-estimations/saved-estimations.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormulaInputDialogComponent } from './components/formula-input-dialog/formula-input-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SavedFormulasComponent } from './components/calculator/saved-formulas/saved-formulas.component';
import { MatCardModule } from '@angular/material/card';
import { EstimationsComponent } from './components/calculator/estimations/estimations.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainRoutingModule } from './main-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddVariableDialogComponent } from './components/calculator/add-variable-dialog/add-variable-dialog.component';

@NgModule({
    declarations: [
        MainComponent,
        CalculatorComponent,
        GuideComponent,
        CalcBtnComponent,
        SavedEstimationsComponent,
        FormulaInputDialogComponent,
        SavedFormulasComponent,
        EstimationsComponent,
        AddVariableDialogComponent,
    ],
    imports: [
        MainRoutingModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatTabsModule,
        CommonModule,
        RouterModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatSnackBarModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule { }
