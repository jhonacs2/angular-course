import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeriesViewComponent} from './series-view.component';
import {CharacterRickMortyResolverService} from './services/character-rick-morty-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: SeriesViewComponent,
    resolve: {characters: CharacterRickMortyResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule {
}
