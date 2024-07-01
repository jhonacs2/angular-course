import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CharactersCarouselComponent } from './characters-carousel/characters-carousel.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavBarComponent,
    CharactersCarouselComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    CharactersCarouselComponent,
    LoadingComponent
  ]
})
export class SharedComponentsModule {
}
