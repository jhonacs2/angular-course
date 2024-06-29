import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoomLairComponent } from '../components/doom-lair/doom-lair.component';

const routes: Routes = [
  {
    path: '',
    component: DoomLairComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRouteModule {
}
