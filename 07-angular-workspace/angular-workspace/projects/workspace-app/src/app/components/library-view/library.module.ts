import {NgModule} from '@angular/core';
import {LibraryRoutingModule} from './library-routing.module';
import {LibraryViewComponent} from './library-view.component';
import {CommonModule} from '@angular/common';
import {WorkCardModule} from '@work/library';

@NgModule({
  declarations: [
    LibraryViewComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    WorkCardModule,
  ]
})
export class LibraryModule {
}
