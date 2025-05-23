import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './pages/post/post.component';
import {ReactivePostsComponent} from './pages/reactive-posts/reactive-posts.component';
import {ReactiveCategoriesComponent} from './pages/reactive-categories/reactive-categories.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'reactive',
    component: ReactivePostsComponent
  },
  {
    path: 'categories',
    component: ReactiveCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
