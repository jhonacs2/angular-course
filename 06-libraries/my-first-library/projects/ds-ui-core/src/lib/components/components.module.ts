import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsInputComponent } from './ds-input/ds-input.component';

@NgModule({
  declarations: [
    DsInputComponent
  ],
  exports: [
    DsInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
