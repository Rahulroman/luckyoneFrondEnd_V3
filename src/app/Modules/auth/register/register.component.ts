import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { RegisterRequestDto } from '../../../Core/Models/auth.model';
import { NotificationService } from '../../../Services/notification.service';
import { LoadingService } from '../../../Services/loading.service';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private toaster = inject(NotificationService);
  private loaderService = inject(LoadingService);
  private authService = inject(AuthService);
 constructor( private router : Router  ){}
  CpasswordHash = '';
  isLoading = false;

  imagePreview: string | ArrayBuffer | null = null;

  user: RegisterRequestDto = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatarImage: null,
    passwordHash: '',
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      
      const file = input.files[0];
      this.user.avatarImage = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  RegisterUser() {
    this.loaderService.showLoader();

    if (this.user.username == '' || this.user.passwordHash == '') {
      this.loaderService.hideLoader();
      this.toaster.showErrorMessage('Enter Username and Password');
      return;
    }

    const formData = new FormData();

    formData.append('Username', this.user.username);
    formData.append('Email', this.user.email ?? '');
    formData.append('FirstName', this.user.firstName ?? '');
    formData.append('LastName', this.user.lastName ?? '');
    formData.append('PasswordHash', this.user.passwordHash);

    if (this.user.avatarImage) {
      formData.append('AvatarImage', this.user.avatarImage);
    }

    this.authService.register('Auth/register', formData).subscribe({
      next: (res) => {
        if (res.isSuccess == false) {
          this.loaderService.hideLoader();
          this.toaster.showErrorMessage(res.message);
       
          return;
        }
        else {
          this.loaderService.hideLoader();
          this.toaster.showSuccessMessage('Registration Successful');
             this.router.navigate(["Auth/login"]);

        }
      },
      error: (error) => {
        this.loaderService.hideLoader();
        this.toaster.showErrorMessage(error.error);
      },
    });
  }
}
