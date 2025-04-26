import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'tm-level-progress',
  templateUrl: './level-progress.component.html',
  styleUrls: ['./level-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelProgressComponent {
  @Input('progress') set progressLevel(value: number) {
    this.progress = `${value} %`;
  }

  @Input() level: number = 0;
  @Input() exp: number = 0;

  public progress: string = '0%';
}
