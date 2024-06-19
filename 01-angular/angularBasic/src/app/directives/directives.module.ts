import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightColourDirective } from './highlightColour.directive';
import { CMonDoSomethingDirective } from './c-mon-do-something.directive';

@NgModule({
  declarations: [CMonDoSomethingDirective, HighlightColourDirective],
  exports: [CMonDoSomethingDirective, HighlightColourDirective],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule {
}
