import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toster : ToastrService) { }

 showSuccessMessage (Message : string){
      this.toster.success(Message);
 }

showErrorMessage(Message : string){
  this.toster.error(Message);
}

showWarningMessage(Message : string){
  this.toster.warning(Message);
}

showInfoMessage(Message : string){
  this.toster.info(Message);
}

}
