import {NgModule} from '@angular/core';
import {SeriesRoutingModule} from './series-routing.module';
import {SeriesViewComponent} from './series-view.component';
import {CommonModule} from '@angular/common';
import {CharacterRickMortyResolverService} from './services/character-rick-morty-resolver.service';

@NgModule({
  declarations: [SeriesViewComponent],
  exports: [SeriesViewComponent],
  imports: [
    SeriesRoutingModule, CommonModule
  ],
  providers:[CharacterRickMortyResolverService]
})
export class SeriesModule {
}
