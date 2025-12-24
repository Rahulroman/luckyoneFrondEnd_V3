import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterLink,FormsModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {



  get isLoginPage () : boolean {
        return window.location.pathname.includes('/login');
  }

  get isRegisterPage() : boolean{
    return window.location.pathname.includes('/register');
  }
}
