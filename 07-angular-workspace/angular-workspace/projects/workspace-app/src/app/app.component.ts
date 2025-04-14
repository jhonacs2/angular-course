import {ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {BoardService} from './services/board.service';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('appTemplate', {read: ViewContainerRef, static: true}) viewContainerRef!: ViewContainerRef;

  title = 'workspace-app';

  constructor() {
  }
}
