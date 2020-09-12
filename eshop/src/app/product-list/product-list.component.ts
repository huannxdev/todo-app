import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public listProduct: Observable<Product[]>;
  public categoryName: string;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.categoryName = this.router.getCurrentNavigation()?.extras?.state?.nameCategory;
  }

  ngOnInit(): void {
    this.listProduct = this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        return this.productService.getProductByCategory(params.category);
      }),
      take(1)
    )
  }

}
