import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';
import {ProductResponse} from '../../interfaces/product-response.interface';

@Component({
  selector: 'hp-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public worker: Worker | undefined;
  public product$: Observable<ProductResponse>;


  constructor(private productService: ProductService,
              private _route: ActivatedRoute) {
    this.product$ = this.productService.getProduct(this._route.snapshot.params['id']);
    this.worker = new Worker(new URL('../../../../workers/heavy.worker', import.meta.url), {type: 'module'});
  }

  ngOnInit(): void {
    this.worker!.onmessage = ({data}) => {
      console.log('Componente: Mensaje recibido del worker:', data);
    };
  }

  startHeavyTask(input: number): void {
    if (this.worker) {
      this.worker.postMessage({numberToProcess: input});
    } else {
      alert('Worker not available');
    }
  }
}


