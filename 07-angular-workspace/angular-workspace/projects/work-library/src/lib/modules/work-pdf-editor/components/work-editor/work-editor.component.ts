import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import EditorJS from '@editorjs/editorjs';

@Component({
  selector: 'lib-work-editor',
  templateUrl: './work-editor.component.html',
  styleUrls: ['./work-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('viewerContainer') public viewerContainer!: ElementRef<HTMLDivElement>;

  public editor!: EditorJS;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      holder: 'editorjs',
      data: {
        time: 1552744582955,
        blocks: [
          {
            "type" : "paragraph",
            "data" : {
              "text" : "The example of text that was written in <b>one of popular</b> text editors."
            }
          },
        ]
      }
    });
  }
}
