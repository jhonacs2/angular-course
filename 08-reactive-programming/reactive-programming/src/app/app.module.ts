import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './pages/post/post.component';
import {ReactivePostsComponent} from './pages/reactive-posts/reactive-posts.component';
import { ReactiveCategoriesComponent } from './pages/reactive-categories/reactive-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ReactivePostsComponent,
    ReactiveCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
