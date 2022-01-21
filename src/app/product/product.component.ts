import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Product[] | undefined;
  type = '';
  category: any;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let ptype = map.get('type');
      if (ptype) {
        this.type = ptype;
      }
    });

    this._productService.getByType(this.type).subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
  }

  onSubmit = (product: Product) => {
    console.log(product);
    this._router.navigate(['/product-details', product.productId]);
  };
}
