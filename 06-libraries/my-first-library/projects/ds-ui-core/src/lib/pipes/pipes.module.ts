import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { FilterGreaterThanPipe } from './filter-greater-than.pipe';


@NgModule({
  declarations: [
    TruncatePipe,
    FilterGreaterThanPipe
  ],
  exports: [
    TruncatePipe,
    FilterGreaterThanPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
