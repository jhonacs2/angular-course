import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoomLairComponent } from './components/doom-lair/doom-lair.component';
import { VillainsRouteModule } from './routes/villains-route.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { MarvelPipesModule } from '../pipes/marvel-pipes.module';

@NgModule({
  declarations: [
    DoomLairComponent
  ],
  imports: [
    CommonModule,
    VillainsRouteModule,
    SharedComponentsModule,
    MarvelPipesModule
  ]
})
export class VillainsModule {
}
