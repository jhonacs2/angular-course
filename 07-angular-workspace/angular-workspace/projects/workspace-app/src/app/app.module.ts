import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';
import { ParentViewComponent } from './components/parent-view/parent-view.component';
import { ChildViewComponent } from './components/child-view/child-view.component';
import { GranpaViewComponent } from './components/granpa-view/granpa-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTodoComponent,
    ParentViewComponent,
    ChildViewComponent,
    GranpaViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
