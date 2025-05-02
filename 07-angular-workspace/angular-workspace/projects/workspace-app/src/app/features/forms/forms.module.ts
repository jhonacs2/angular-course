import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {FormsRoutingModule} from './forms-routing.module';
import {FormProModule} from '@work/library';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormProModule
  ]
})
export class FormsModule {
}
