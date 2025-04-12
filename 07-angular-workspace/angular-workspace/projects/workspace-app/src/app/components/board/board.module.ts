import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {BoardRoutingModule} from './board-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, BoardRoutingModule, DragDropModule]
})
export class BoardModule {
}
