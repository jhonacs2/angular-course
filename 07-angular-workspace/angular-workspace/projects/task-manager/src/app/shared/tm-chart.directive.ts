import {Directive, ElementRef, Input, NgModule, OnInit} from '@angular/core';
import {Chart, ChartType, DefaultDataPoint} from 'chart.js/auto';
import {ChartConfiguration, ChartData} from 'chart.js/dist/types';

@Directive({
  selector: '[tmChart]'
})
export class TmChartDirective<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown,
> implements OnInit {
  @Input() public type: ChartConfiguration<TType, TData, TLabel>['type'] = 'bar' as TType;
  @Input('dataChart') public data!: ChartData<TType, TData, TLabel>;

  private _chart!: Chart<TType, TData, TLabel>;

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this._chart = new Chart(this._elementRef.nativeElement, this.getChartConfiguration());
  }

  private getChartConfiguration(): ChartConfiguration<TType, TData, TLabel> {
    return {
      type: this.type,
      data: this.data,
    };
  }
}

@NgModule({
  declarations: [TmChartDirective],
  exports: [TmChartDirective]
})
export class TmChartModule {
}
