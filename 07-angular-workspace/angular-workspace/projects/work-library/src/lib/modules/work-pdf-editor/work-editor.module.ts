import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkEditorComponent} from './components/work-editor/work-editor.component';
import { WorkHeaderComponent } from './components/work-header/work-header.component';

@NgModule({
  declarations: [
    WorkEditorComponent,
    WorkHeaderComponent
  ],
  exports: [
    WorkEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkEditorModule {
}
