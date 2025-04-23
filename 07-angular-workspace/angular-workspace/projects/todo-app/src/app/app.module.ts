import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewTodoComponent} from './todos/components/new-todo/new-todo.component';
import {TodoComponent} from './todos/components/todo/todo.component';
import {FooterComponent} from './todos/components/footer/footer.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { TodoListItemComponent } from './todos/components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    TodoComponent,
    FooterComponent,
    TodoListComponent,
    TodoListItemComponent
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
