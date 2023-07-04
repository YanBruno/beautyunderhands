import { Component } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader-page.component.html',
  styleUrls: ['./loader-page.component.css']
})
export class LoaderPageComponent {
  constructor(public loaderService: LoaderService) {


  }
}