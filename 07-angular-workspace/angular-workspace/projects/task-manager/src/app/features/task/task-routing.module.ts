import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task.component';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
