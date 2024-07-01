import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoomLairComponent } from '../components/doom-lair/doom-lair.component';
import { VillainDetailsComponent } from '../components/villains-details/villain-details.component';

const routes: Routes = [
  {
    path: '',
    component: DoomLairComponent,
  },
  {
    path: 'villains/:id',
    component:VillainDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRouteModule {
}
