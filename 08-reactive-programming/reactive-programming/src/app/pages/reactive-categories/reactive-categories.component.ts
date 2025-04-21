import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DeclarativePostService} from '../../services/declarative-post.service';
import {IPost} from '../../interfaces/api-response.interface';
import {BehaviorSubject, tap} from 'rxjs';

@Component({
  selector: 'app-reactive-categories',
  templateUrl: './reactive-categories.component.html',
  styleUrls: ['./reactive-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display:flex'
  }
})
export class ReactiveCategoriesComponent {
  posts$ = this._postService.getPostWithCategory();
  postSelected$ = new BehaviorSubject<IPost | null>(null);

  constructor(private _postService: DeclarativePostService) {
  }

  selectPost(post: IPost): void {
    post.id && this.postSelected$.next(post);
  }
}
