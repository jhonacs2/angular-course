import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CheckboxComponent,
  DropdownComponent,
  InputErrorProComponent,
  InputProComponent,
  TextAreaProComponent
} from './components';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilderComponent} from './factory/form-builder/form-builder.component';
import {FormCoreComponent} from './factory/form-core/form-core.component';
import {FormProService} from './services/form-pro.service';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';
import {ChipsModule} from 'primeng/chips';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    InputProComponent,
    InputErrorProComponent,
    DropdownComponent,
    FormBuilderComponent,
    FormCoreComponent,
    CheckboxComponent,
    TextAreaProComponent,
    FormCoreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    PaginatorModule,
    ChipsModule,
    CheckboxModule,
  ],
  exports: [
    FormCoreComponent,
    FormBuilderComponent
  ],
  providers: [FormProService]
})
export class FormProModule {
}
