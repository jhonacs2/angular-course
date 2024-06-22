import { NgModule } from '@angular/core';
import { StarkTowerComponent } from './components/stark-tower/stark-tower.component';
import { HeroesRoutesModule } from './routes/heroes-routes.module';

@NgModule({
  declarations: [
    StarkTowerComponent
  ],
  imports: [
    HeroesRoutesModule
  ]
})
export class HeroesModule {
}
