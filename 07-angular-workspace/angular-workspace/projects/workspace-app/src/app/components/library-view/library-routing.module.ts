import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LibraryViewComponent} from './library-view.component';

const routes: Routes = [{
  path: '',
  component: LibraryViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {
}
