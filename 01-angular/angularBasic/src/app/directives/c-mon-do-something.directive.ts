import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  /*selector: 'cMonDoSomething',*/
  selector: 'p.user[logText]:not([isVisible=true])'
})
export class CMonDoSomethingDirective {

  constructor(private _render2: Renderer2,
              private _el: ElementRef) {
    console.log('Complex selector directive', _el);
    const attrLogText = this._el.nativeElement.getAttribute('logText');
    this._render2.setProperty(this._el.nativeElement, 'innerText', attrLogText);
    this._render2.setStyle(this._el.nativeElement, 'color', 'red');
  }
}
