import {Injectable} from '@angular/core';
import {SupabaseService} from './supabase.service';
import {forkJoin, from, map, Observable} from 'rxjs';
import {IPost, IPostResponse} from '../interfaces/api-response.interface';
import {DeclarativeCategoryService} from './declarative-category.service';

@Injectable({
  providedIn: 'root'
})
export class DeclarativePostService {

  constructor(private _supabaseService: SupabaseService,
              private _declarativeCategoryService: DeclarativeCategoryService) {
  }

  getPosts(): Observable<IPostResponse[]> {
    return from(this._supabaseService.supabase
      .from('posts')
      .select('*')).pipe(map(posts => posts.data as IPostResponse[]));
  }

  getPostWithCategory(): Observable<IPost[]> {
    return forkJoin([this.getPosts(), this._declarativeCategoryService.getCategories()])
      .pipe(map(([posts, categories]) => {
        return posts.map(post => {
          const category = categories.find(category => category.id === post.category_id);
          return {
            ...post,
            categoryName: category?.title ?? '',
          };
        });
      }));
  }
}
