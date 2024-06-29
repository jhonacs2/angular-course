import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../services/marvel.service';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../../../../../api/response/marvel-data.interface';

@Component({
  selector: 'app-doom-lair',
  templateUrl: './doom-lair.component.html',
  styleUrls: ['./doom-lair.component.scss']
})
export class DoomLairComponent implements OnInit {
  public characterDetails: Observable<CharacterDetails[]>;

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.X_LARGE;

  private readonly AVENGER_SERIES_ID: number = 789;

  constructor(private _marvelService: MarvelService) {
    this.characterDetails = new Observable<CharacterDetails[]>();
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.characterDetails = this._marvelService.getCharactersBySeriesId(this.AVENGER_SERIES_ID);
  }
}
