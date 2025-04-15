import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InputTodoComponent} from './components/input-todo/input-todo.component';
import {ParentViewComponent} from './components/parent-view/parent-view.component';
import {ChildViewComponent} from './components/child-view/child-view.component';
import {GranpaViewComponent} from './components/granpa-view/granpa-view.component';
import {BodyProfileComponent} from './components/body-profile/body-profile.component';
import {AvatarProfileComponent} from './components/avatar-profile/avatar-profile.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    ParentViewComponent,
    ChildViewComponent,
    GranpaViewComponent,
    BodyProfileComponent,
    AvatarProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
