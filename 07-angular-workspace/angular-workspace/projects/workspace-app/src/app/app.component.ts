import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BoardService} from './services/board.service';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'workspace-app';

  constructor(private _board: BoardService) {
    if (this._board.board) {
      console.log(this._board.board, 'ya existe');
    } else {
      console.log('seteando');
      this._board.board = 'jhona';
    }
  }
}
