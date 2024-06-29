import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tower', pathMatch: 'full' },
  {
    path: 'tower',
    loadChildren: () => import('../heroes/heroes.module').then(p => p.HeroesModule)
  },
  {
    path: 'doom_lair',
    loadChildren: () => import('../villains/villains.module').then(p => p.VillainsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutesModule {
}
