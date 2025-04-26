import {NgModule} from '@angular/core';
import {TaskComponent} from './task.component';
import {TaskRoutingModule} from './task-routing.module';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    TaskRoutingModule
  ]
})
export class TaskModule {
}
