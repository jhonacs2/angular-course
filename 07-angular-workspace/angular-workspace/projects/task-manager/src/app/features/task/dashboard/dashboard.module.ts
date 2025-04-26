import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {TaskCardComponent} from './components/task-card/task-card.component';
import {LevelProgressComponent} from './components/level-progress/level-progress.component';
import {CoinsComponent} from './components/coins/coins.component';
import {CharacterService} from './services/character.service';
import {CommonModule} from '@angular/common';
import {ActivityCardComponent} from './components/activity-card/activity-card.component';
import {ActivityService} from './services/activity.service';
import { DashboardModalComponent } from './components/dashboard-modal/dashboard-modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TaskCardComponent,
    LevelProgressComponent,
    CoinsComponent,
    ActivityCardComponent,
    DashboardModalComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [
    CharacterService,
    ActivityService
  ]
})
export class DashboardModule {
}
