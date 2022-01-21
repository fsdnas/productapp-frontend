import { Component } from '@angular/core';
import { Tabs } from './models/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-app-material';
  tabs: Tabs[] = [];

  constructor() {
    // this.tabs = [
    //   {
    //     label: 'Home',
    //     route: 'home',
    //     active: true,
    //   },
    //   {
    //     label: 'Products',
    //     route: 'products',
    //     active: false,
    //   },
    // ];
  }
}
