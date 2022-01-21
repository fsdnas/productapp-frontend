import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  search: string;

  categories: string[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getDistinctCategory().subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
  }
}
