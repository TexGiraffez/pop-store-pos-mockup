import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./auth/login-component/login-component').then((m) => m.LoginComponent)},
    { path: 'home', loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage)},
    { path: 'pos', loadComponent: () => import('./pages/pos-page/pos-page').then((m) => m.PosPage)},
    { path: 'reports', loadComponent: () => import('./pages/report-page/report-page').then((m) => m.ReportPage)},
    { path: 'checkout', loadComponent: () => import('./components/checkout-modal/checkout-modal').then((m) => m.CheckoutModal)},
    // { path: 'register' , loadComponent: () => import('./auth/register-component/register-component').then((m) => m.RegisterComponent) }

];
