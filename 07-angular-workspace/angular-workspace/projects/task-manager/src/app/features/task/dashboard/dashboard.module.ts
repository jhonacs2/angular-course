import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { LevelProgressComponent } from './components/level-progress/level-progress.component';
import { CoinsComponent } from './components/coins/coins.component';


@NgModule({
  declarations: [DashboardComponent, TaskCardComponent, LevelProgressComponent, CoinsComponent],
  imports: [DashboardRoutingModule]
})
export class DashboardModule {
}
