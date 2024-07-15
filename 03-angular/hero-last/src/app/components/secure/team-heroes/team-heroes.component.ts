import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../../../api/response/marvel-data.interface';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';
import { MarvelService } from '../../../services/marvel.service';
import { MarvelThumbnailPipe } from '../../../pipes/marvel-thumbnail.pipe';

@Component({
  selector: 'app-team-heroes',
  standalone: true,
  imports: [
    LoadingComponent,
    AsyncPipe,
    MarvelThumbnailPipe
  ],
  templateUrl: './team-heroes.component.html',
  styleUrl: './team-heroes.component.scss'
})
export class TeamHeroesComponent implements OnInit {
  public characterDetails$: Observable<CharacterDetails[]>;

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.X_LARGE;

  private readonly AVENGER_SERIES_ID: number = 9085;

  constructor(private _marvelService: MarvelService) {
    this.characterDetails$ = new Observable<CharacterDetails[]>();
  }

  ngOnInit(): void {
    this.characterDetails$ = this._marvelService.getCharactersBySeriesId(this.AVENGER_SERIES_ID);
  }
}
