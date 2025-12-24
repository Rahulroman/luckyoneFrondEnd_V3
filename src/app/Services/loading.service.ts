import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  public loading$ = new BehaviorSubject<boolean>(false);

  showLoader(){
    this.loading$.next(true);
    console.log( 'now : ' + this.loading$.value);
  }

  hideLoader(){
    this.loading$.next(false);
  }



}
