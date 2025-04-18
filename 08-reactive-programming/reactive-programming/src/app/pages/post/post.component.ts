import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPostResponse} from '../../interfaces/api-response.interface';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  posts: IPostResponse[] = [];

  unsubscribe: Subject<void> = new Subject<void>();

  constructor(private _postService: PostService,
              private _cdr: ChangeDetectorRef,) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private getPosts(): void {
    this._postService.getPosts()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(posts => {
        this.posts = posts;
        this._cdr.markForCheck();
      });
  }
}
