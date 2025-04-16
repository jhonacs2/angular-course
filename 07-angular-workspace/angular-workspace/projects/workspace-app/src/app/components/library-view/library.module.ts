import {NgModule} from '@angular/core';
import {LibraryRoutingModule} from './library-routing.module';
import {LibraryViewComponent} from './library-view.component';
import {CommonModule} from '@angular/common';
import {WorkCardModule, WorkEditorModule} from '@work/library';

@NgModule({
  declarations: [
    LibraryViewComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    WorkCardModule,
    WorkEditorModule,
  ]
})
export class LibraryModule {
}
