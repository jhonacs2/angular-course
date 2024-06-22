import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarkTowerComponent } from '../components/stark-tower/stark-tower.component';

const routes: Routes = [
  {
    path: '',
    component: StarkTowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutesModule {
}
