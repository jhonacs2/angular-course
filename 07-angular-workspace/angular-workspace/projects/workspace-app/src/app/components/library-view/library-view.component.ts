import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'ad-library-view',
  templateUrl: './library-view.component.html',
  styleUrls: ['./library-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryViewComponent implements OnInit {
  pdfUrl: string;

  constructor() {
    this.pdfUrl = 'assets/pdf/dummy.pdf';
  }

  ngOnInit(): void {
  }
}
