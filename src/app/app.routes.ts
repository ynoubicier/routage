import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './core/services/auth.service';

export const routes: Routes = [
    {
        path: 'employee',
        title: 'Mes employés - Routage',
        loadComponent: () => import('./ui/home/home.component'),
        canActivate: [ () => inject(AuthService).isLoggedIn() ],
    },
    {
        path: 'login',
        title: 'Connexion - Routage',
        loadComponent: () => import('./ui/login/login.component')
    },
    {
        path: 'add-employee',
        title: 'Ajout employé - Routage',
        loadComponent: () => import('./ui/add-employee/add-employee.component'),
        canActivate: [ () => inject(AuthService).isLoggedIn() ],
    },
    {
        path: 'employee/:id',
        loadComponent: () => import('./ui/detail-employee/detail-employee.component'),
        canActivate: [ () => inject(AuthService).isLoggedIn() ],
    },
    {
        path: '404',
        title: 'Page not found',
        loadComponent: () => import('./ui/page-not-found/page-not-found.component')
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'employee'
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
