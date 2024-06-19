import { NgModule } from '@angular/core';
import { FilterGreaterThanPipe } from './filter-greater-than.pipe';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [FilterGreaterThanPipe, TruncatePipe],
  exports: [FilterGreaterThanPipe, TruncatePipe],
  imports: []
})
export class PipesModule {
}
