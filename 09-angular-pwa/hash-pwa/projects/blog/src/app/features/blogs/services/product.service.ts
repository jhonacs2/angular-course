import {Injectable} from '@angular/core';
import {ProductResponse} from '../interfaces/product-response.interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  private _BASE_URL: string = 'https://fakestoreapi.com';

  constructor(private _http: HttpClient) {
  }

  getProducts(): Observable<ProductResponse[]> {
    return this._http.get<ProductResponse[]>(`${this._BASE_URL}/products`);
  }
}
