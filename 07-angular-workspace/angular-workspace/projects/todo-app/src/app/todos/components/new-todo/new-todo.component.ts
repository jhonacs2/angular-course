import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewTodoComponent {
  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  newTodo(textInput: HTMLInputElement): void {
    const text = textInput.value.trim();
    if (text) {
      this.addTodo.emit(text);
      textInput.value = '';
    }
  }
}
