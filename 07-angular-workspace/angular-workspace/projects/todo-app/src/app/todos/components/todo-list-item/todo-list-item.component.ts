import {Component, Input} from '@angular/core';
import {ITodo} from '../../models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input() todo: ITodo | null = null;
  editing = false;
}
