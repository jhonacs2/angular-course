import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tower', pathMatch: 'full' },
  {
    path: 'tower',
    loadChildren: () => import('../heroes/heroes.module').then(p => p.HeroesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutesModule {
}
