import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
  /* inputs: ['highlightColor:color']*/
})
export class HighlightColourDirective implements OnChanges {
  @Input('highlightColor') highlightColor: string;

  @HostListener('focus') onFocus() {
    this._render.setStyle(this._elementRef.nativeElement, 'outline', `2px solid ${this.highlightColor}`);
  }

  @HostListener('blur') onBlur() {
    this._render.removeStyle(this._elementRef.nativeElement, 'outline');
  }

  //
  // @Input('logText')
  // set highlightColor(color: string) {
  //   console.log(color);
  // };
  //
  constructor(private _elementRef: ElementRef,
              private _render: Renderer2) {
    this.highlightColor = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.highlightColor) {
      if (this.highlightColor === 'yellow') {
        this.highlightColor = "green"
      }
    }
  }
}
