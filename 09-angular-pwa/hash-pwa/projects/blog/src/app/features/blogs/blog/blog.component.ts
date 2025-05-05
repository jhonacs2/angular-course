import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../interfaces/product-response.interface';
import {catchError, finalize, tap} from 'rxjs/operators';

@Component({
  selector: 'hp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  products$: Observable<ProductResponse[]> | undefined;
  loading: boolean = true;
  error: boolean = false;
  // Array para skeletons
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
