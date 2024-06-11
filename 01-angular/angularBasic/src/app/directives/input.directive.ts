import { Directive } from '@angular/core';

@Directive({
  selector: '[appInput]',
  inputs: ['text:logText']
})
export class InputDirective {
  constructor() {
  }
}
