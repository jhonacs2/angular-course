import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TaskCardComponent} from './components/task-card/task-card.component';
import {LevelProgressComponent} from './components/level-progress/level-progress.component';
import {CoinsComponent} from './components/coins/coins.component';
import {CharacterService} from './services/character.service';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskCardComponent,
    LevelProgressComponent,
    CoinsComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [CharacterService]
})
export class DashboardModule {
}
