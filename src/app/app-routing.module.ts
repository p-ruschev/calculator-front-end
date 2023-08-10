import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { MainComponent } from './modules/main/main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
        canLoad: [() => {
            const token = localStorage.getItem('token');
            const router = inject(Router);

            return token ? router.navigate(['']) : true;
        }]
    },
    {
        path: 'calculator',
        component: MainComponent,
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }