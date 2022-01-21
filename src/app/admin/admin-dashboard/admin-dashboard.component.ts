import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../models/tabs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  tabs: Tabs[] = [
    { label: 'Add Product', route: 'add-product', active: true },
    { label: 'update Product', route: 'update-product', active: true },
    { label: 'Delete Product', route: 'delete-product', active: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
