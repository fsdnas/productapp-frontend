import { AfterViewChecked, Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, AfterViewChecked {
  categories: string[] = [];
  category = '';
  types: [];

  constructor(
    private _adminService: AdminService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }

  onAdding = (addForm: NgForm) => {
    console.log(addForm.value);
    let product = addForm.value;
    this._adminService.addProduct(product).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
  };

  ngAfterViewChecked(): void {
    console.log(this.category);
    this._productService.getTypeByCategory(this.category).subscribe((data) => {
    
      
    });
  }
}
