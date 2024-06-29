import { Pipe, PipeTransform } from '@angular/core';
import { MarvelThumbnail } from '../../../../api/response/marvel-data.interface';
import { MarvelPortraitThumbnails } from '../../enums/marvel-portrait-thumbnails.enum';

@Pipe({
  name: 'marvelThumbnail'
})
export class MarvelThumbnailPipe implements PipeTransform {
  transform(thumbnail: MarvelThumbnail, portrait: MarvelPortraitThumbnails): string {
    return `${thumbnail.path}/${portrait}.${thumbnail.extension}`;
  }
}
