import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharactersCarouselComponent } from './characters-carousel/characters-carousel.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CharactersCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent, CharactersCarouselComponent]
})
export class SharedComponentsModule {
}
