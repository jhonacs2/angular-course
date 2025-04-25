import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoFacadeService} from '../../facades/todo-facade.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
    todos$ = this._todoFacadeService.getTodos();

    constructor(private _todoFacadeService: TodoFacadeService) {
    }

    ngOnInit(): void {
        this._todoFacadeService.loadTodos();
    }

}
