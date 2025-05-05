import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../interfaces/product-response.interface';
import {catchError, finalize, shareReplay, tap} from 'rxjs/operators';

@Component({
  selector: 'hp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductResponse[]> | undefined;
  loading: boolean = true;
  error: boolean = false;
  skeletonItems = Array(8).fill(0);

  constructor(private _productService: ProductService) {
    this.products$ = this._productService.getProducts().pipe(
      tap(console.log),
      finalize(() => this.loading = false),
      catchError(err => {
        console.error('Failed to load products:', err);
        this.error = true;
        this.loading = false;
        return [];
      })
    );
  }

  ngOnInit(): void {
    this.loading = true;
    this.error = false;

  }

  trackById(index: number, item: ProductResponse): number {
    return item.id;
  }
}
