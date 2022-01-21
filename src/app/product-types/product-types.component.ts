import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { TypeView } from '../models/type-view';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss'],
})
export class ProductTypesComponent implements OnInit {
  types!: TypeView[];
  category: any;
  products: Product[] | undefined;
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let cat = map.get('category');
      if (cat) {
        this.category = cat;
        console.log(this.category);
      }

    this._productService.getTypeByCategory(this.category).subscribe({
      next: (data) => {
        this.types = data;
        console.log(this.types);
      },
      error: (error) => console.log(error),
      complete: () => console.log('completed'),
    });
  });

  }

  // onSearch = (types: string) => {
  //   console.log(types);
  //   this._router.navigate([
  //     `/${this.category.toLowerCase()}`,
  //     types.toLowerCase(),
  //   ]);
  // };
}
