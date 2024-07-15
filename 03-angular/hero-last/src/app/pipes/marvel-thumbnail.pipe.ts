import { Pipe, PipeTransform } from '@angular/core';
import { MarvelPortraitThumbnails } from '../enums/marvel-portrait-thumbnails.enum';
import { MarvelThumbnail } from '../api/response/marvel-data.interface';

@Pipe({
  name: 'marvelThumbnail',
  standalone: true
})
export class MarvelThumbnailPipe implements PipeTransform {
  transform(thumbnail: MarvelThumbnail, portrait: MarvelPortraitThumbnails): string {
    return `${thumbnail.path}/${portrait}.${thumbnail.extension}`;
  }
}
