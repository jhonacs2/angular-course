import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarkTowerComponent } from '../components/stark-tower/stark-tower.component';
import { HeroDetailsComponent } from '../components/hero-details/hero-details.component';

const routes: Routes = [
  {
    path: '',
    component: StarkTowerComponent,
    children: [
      {
        path: '',
        component: HeroDetailsComponent,
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
