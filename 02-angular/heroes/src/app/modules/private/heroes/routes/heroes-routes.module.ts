import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarkTowerComponent } from '../components/stark-tower/stark-tower.component';
import { HeroDetailsComponent } from '../components/hero-details/hero-details.component';
import { TeamHeroesComponent } from '../components/team-heroes/team-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: StarkTowerComponent,
    children: [
      {
        path: '',
        component: HeroDetailsComponent,
      },
      {
        path: 'team',
        component: TeamHeroesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutesModule {
}
