import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { InputProComponent } from './components/input-pro/input-pro.component';
import {ChipsModule} from 'primeng/chips';
import {ReactiveFormsModule} from '@angular/forms';
import { InputErrorProComponent } from './components/input-error-pro/input-error-pro.component';

@NgModule({
  declarations: [
    InputProComponent,
    InputErrorProComponent
  ],
  imports: [
    CommonModule,
    ChipsModule,
    ReactiveFormsModule
  ]
})
export class FormProModule {
}
