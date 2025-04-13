import {NgModule} from '@angular/core';
import {SeriesRoutingModule} from './series-routing.module';
import {SeriesViewComponent} from './series-view.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [SeriesViewComponent],
  exports: [SeriesViewComponent],
  imports: [SeriesRoutingModule, CommonModule]
})
export class SeriesModule {
}
