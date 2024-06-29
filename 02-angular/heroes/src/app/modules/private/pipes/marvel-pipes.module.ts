import { NgModule } from '@angular/core';
import { MarvelThumbnailPipe } from './marvel-thumbnail/marvel-thumbnail.pipe';

@NgModule({
  declarations: [MarvelThumbnailPipe],
  exports: [MarvelThumbnailPipe]
})
export class MarvelPipesModule {
}
