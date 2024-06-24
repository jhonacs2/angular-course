import { NgModule } from '@angular/core';
import { StarkTowerComponent } from './components/stark-tower/stark-tower.component';
import { HeroesRoutesModule } from './routes/heroes-routes.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StarkTowerComponent,
    HeroDetailsComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutesModule,
    SharedComponentsModule
  ]
})
export class HeroesModule {
}
