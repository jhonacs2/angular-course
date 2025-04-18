import {Injectable} from '@angular/core';
import {SupabaseService} from './supabase.service';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private _supabaseService: SupabaseService) {
  }

  getCategories() {
    return from(this._supabaseService.supabase
      .from('categories')
      .select('*'));
  }
}
