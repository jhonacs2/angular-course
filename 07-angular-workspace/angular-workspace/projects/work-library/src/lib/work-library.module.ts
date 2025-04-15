import {NgModule} from '@angular/core';
import {WorkLibraryComponent} from './work-library.component';
import {WorkCardModule} from './components/lib-card/work-card.module';

@NgModule({
  declarations: [
    WorkLibraryComponent,
  ],
  exports: [
    WorkLibraryComponent,
    WorkCardModule
  ]
})
export class WorkLibraryModule {
}
