import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DeclarativePostService} from '../../services/declarative-post.service';
import {BehaviorSubject, combineLatest, map} from 'rxjs';
import {DeclarativeCategoryService} from '../../services/declarative-category.service';

@Component({
  selector: 'app-reactive-posts',
  templateUrl: './reactive-posts.component.html',
  styleUrls: ['./reactive-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactivePostsComponent {
  selectedCategorySubject = new BehaviorSubject<number>(0);
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  posts$ = this._postService.getPosts();
  categories$ = this._categoryService.getCategories();

  filteredPosts$ = combineLatest([this.posts$, this.selectedCategoryAction$])
    .pipe(map(([posts, selectedCategory]) => {
      return posts.filter(posts => selectedCategory ? posts.category_id === selectedCategory : true);
    }));

  constructor(private _postService: DeclarativePostService,
              private _categoryService: DeclarativeCategoryService) {
  }

  categoryChange(category: HTMLSelectElement): void {
    this.selectedCategorySubject.next(Number(category.value));
  }
}
