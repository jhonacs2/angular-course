import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic/basic.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { PipesModule } from '../pipes/pipes.module';
import { SonComponent } from './son/son.component';
import { FatherComponent } from './father/father.component';
import { GrandfatherComponent } from './grandfather/grandfather.component';
import { HouseComponent } from './house/house.component';
import { RequestsComponent } from './requests/requests.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { DirectivesModule } from '../directives/directives.module';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    BasicComponent,
    PipesExampleComponent,
    SonComponent,
    FatherComponent,
    GrandfatherComponent,
    HouseComponent,
    RequestsComponent,
    DirectiveExampleComponent,
    FormsComponent,
    ComplexFormComponent
  ],
  exports: [
    BasicComponent,
    PipesExampleComponent,
    SonComponent,
    FatherComponent,
    GrandfatherComponent,
    HouseComponent,
    RequestsComponent,
    DirectiveExampleComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    InputTextModule,
    FormsModule,
  ]
})
export class ComponentsModule {
}
