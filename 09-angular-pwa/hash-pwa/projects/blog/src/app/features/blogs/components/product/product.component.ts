import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../interfaces/product-response.interface';

@Component({
  selector: 'hp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product$: Observable<ProductResponse>;


  constructor(private productService: ProductService,
              private _route: ActivatedRoute) {
    this.product$ = this.productService.getProduct(this._route.snapshot.params['id']);
  }
}
