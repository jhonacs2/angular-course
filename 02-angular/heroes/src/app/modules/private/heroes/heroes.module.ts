import { NgModule } from '@angular/core';
import { StarkTowerComponent } from './components/stark-tower/stark-tower.component';
import { HeroesRoutesModule } from './routes/heroes-routes.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { CommonModule } from '@angular/common';
import { TeamHeroesComponent } from './components/team-heroes/team-heroes.component';
import { MarvelPipesModule } from '../pipes/marvel-pipes.module';

@NgModule({
  declarations: [
    StarkTowerComponent,
    HeroDetailsComponent,
    TeamHeroesComponent
  ],
  imports: [
    CommonModule,
    MarvelPipesModule,
    HeroesRoutesModule,
    SharedComponentsModule,
  ]
})
export class HeroesModule {
}
