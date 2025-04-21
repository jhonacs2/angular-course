import {Injectable} from '@angular/core';
import {SupabaseService} from './supabase.service';
import {from, map, Observable} from 'rxjs';
import {ICategoryResponse} from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class DeclarativeCategoryService {
  constructor(private _supabaseService: SupabaseService) {
  }

  getCategories(): Observable<ICategoryResponse[]> {
    return from(this._supabaseService.supabase
      .from('categories')
      .select('*')).pipe(map(categories => categories.data as ICategoryResponse[]));
  }
}
