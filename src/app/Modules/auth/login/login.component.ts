import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { LoadingService } from '../../../Services/loading.service';
import { NotificationService } from '../../../Services/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private authService : AuthService , private loader : LoadingService , private notificationService : NotificationService ,
  private router : Router
){}
  user = {
    username : "",
    password : ""
  }

onSubmit(){
this.loader.showLoader();

  this.authService.login("Auth/login" , this.user).subscribe({
    next: (res)=> {
      if(res.isSuccess == true){
      this.notificationService.showSuccessMessage(res.message);
      this.loader.hideLoader();
      this.router.navigate(["/dashboard"]);
    }
    else{
      this.notificationService.showErrorMessage(res.message);
      this.loader.hideLoader();
    }
    },
    error: (error)=> {

      this.loader.hideLoader();
    }
  });


}







}
