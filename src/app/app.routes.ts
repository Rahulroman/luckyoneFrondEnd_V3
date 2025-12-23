import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Layouts/AuthLayout/auth-layout/auth-layout.component';
import { RegisterComponent } from './Modules/auth/register/register.component';

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
    }
];
