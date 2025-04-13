import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeriesViewComponent} from './series-view.component';

const routes: Routes = [{path: '', component: SeriesViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule {
}
