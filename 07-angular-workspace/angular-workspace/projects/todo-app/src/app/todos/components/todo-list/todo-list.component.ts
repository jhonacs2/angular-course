import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITodo} from '../../models';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    @Input() todos: ITodo[] | null = null;
    @Output() toggle = new EventEmitter<number>();
    @Output() update = new EventEmitter<{ id: number; text: string }>();
    @Output() delete = new EventEmitter<number>();
}
