import {NgModule} from '@angular/core';
import {ChartsComponent} from './charts/charts.component';
import {ChartsRoutingModule} from './charts-routing.module';
import {CommonModule} from '@angular/common';
import {TmChartModule} from '../../../shared/tm-chart.directive';

@NgModule({
  declarations: [ChartsComponent],
  imports: [ChartsRoutingModule, CommonModule, TmChartModule]
})
export class ChartsModule {
}
