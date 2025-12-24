import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { LoadingService } from '../../../../Services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  constructor (private loadingService: LoadingService ){}


   loading$ = this.loadingService.loading$;



}
