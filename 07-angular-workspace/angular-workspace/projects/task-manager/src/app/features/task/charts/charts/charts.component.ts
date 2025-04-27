import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'tm-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {
  data = [
    {year: 2010, count: 10},
    {year: 2011, count: 20},
    {year: 2012, count: 15},
    {year: 2013, count: 25},
  ];

  dataChart = {
    labels: this.data.map(row => row.year),
    datasets: [
      {
        label: 'Acquisitions by year',
        data: this.data.map(row => row.count)
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
