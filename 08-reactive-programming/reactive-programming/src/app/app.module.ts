import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostComponent} from './pages/post/post.component';
import {ReactivePostsComponent} from './pages/reactive-posts/reactive-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ReactivePostsComponent
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
