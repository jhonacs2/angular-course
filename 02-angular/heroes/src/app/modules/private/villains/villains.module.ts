import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoomLairComponent } from './components/doom-lair/doom-lair.component';
import { VillainsRouteModule } from './routes/villains-route.module';
import { SharedComponentsModule } from '../components/shared-components.module';
import { MarvelPipesModule } from '../pipes/marvel-pipes.module';
import { VillainDetailsComponent } from './components/villains-details/villain-details.component';

@NgModule({
  declarations: [
    DoomLairComponent,
    VillainDetailsComponent
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
