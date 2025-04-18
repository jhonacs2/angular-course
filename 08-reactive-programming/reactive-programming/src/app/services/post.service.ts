import {Injectable} from '@angular/core';
import {from, map, Observable} from 'rxjs';
import {SupabaseService} from './supabase.service';
import {IPostResponse} from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _supabaseService: SupabaseService) {
  }

  getPosts(): Observable<IPostResponse[]> {
    return from(this._supabaseService.supabase
      .from('posts')
      .select('*')).pipe(map(dataResponse => dataResponse.data as IPostResponse[]));
  }
}
