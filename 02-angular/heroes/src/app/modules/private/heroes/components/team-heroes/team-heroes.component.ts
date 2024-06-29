import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../services/marvel.service';
import { CharacterDetails } from '../../../../../api/response/marvel-data.interface';
import { Observable } from 'rxjs';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';

@Component({
  selector: 'app-team-heroes',
  templateUrl: './team-heroes.component.html',
  styleUrls: ['./team-heroes.component.scss']
})
export class TeamHeroesComponent implements OnInit {
  public characterDetails: Observable<CharacterDetails[]>;

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.X_LARGE;

  private readonly AVENGER_SERIES_ID: number = 9085;

  constructor(private _marvelService: MarvelService) {
    this.characterDetails = new Observable<CharacterDetails[]>();
  }

  ngOnInit(): void {
    this.characterDetails = this._marvelService.getCharactersBySeriesId(this.AVENGER_SERIES_ID);
  }
}
