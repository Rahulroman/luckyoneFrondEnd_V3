import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layouts/AuthLayout/auth-layout/auth-layout.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { MainLayoutComponent } from './Layouts/MainLayout/main-layout/main-layout.component';
import { flush } from '@angular/core/testing';

export const routes: Routes = [
    {
        path : "auth" , component : AuthLayoutComponent,
        children : [
            {
                path : "register" , 
                loadComponent : () => import("./Modules/auth/register/register.component").then(m => m.RegisterComponent) ,
            },
            {
                path : "login",
                loadComponent : () => import("./Modules/auth/login/login.component").then(m => m.LoginComponent)
            }
        ]
    },
    {
        path : "" , component : MainLayoutComponent, 
        children : [
            {
                path : "" , redirectTo : 'dashboard' , pathMatch : "full"
            },
            {
                path : "dashboard" , loadComponent : () => import("./Modules/Dashboard/dashboard/dashboard.component").then(m => m.DashboardComponent)
            }
        ]
    },
    {
        path : '**' , component : AuthLayoutComponent,
        children : [
            {
                path : "auth/register" , 
                loadComponent : () => import("./Modules/auth/register/register.component").then(m => m.RegisterComponent)
            }
        ]
    }
];
