import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { MarvelThumbnailPipe } from '../../../pipes/marvel-thumbnail.pipe';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../../../api/response/marvel-data.interface';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';
import { MarvelService } from '../../../services/marvel.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-doom-lair',
  standalone: true,
  imports: [
    NavBarComponent,
    RouterLink,
    MarvelThumbnailPipe,
    AsyncPipe
  ],
  templateUrl: './doom-lair.component.html',
  styleUrl: './doom-lair.component.scss'
})
export class DoomLairComponent implements OnInit {
  public characterDetails: Observable<CharacterDetails[]>;
  public navBarList: { value: string, routerLink: string }[];

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.X_LARGE;

  private _marvelService: MarvelService = inject(MarvelService);

  private readonly AVENGER_SERIES_ID: number = 789;
  constructor() {
    this.characterDetails = new Observable<CharacterDetails[]>();
    this.navBarList = [];
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.characterDetails = this._marvelService.getCharactersBySeriesId(this.AVENGER_SERIES_ID);
    this.navBarList = [
      {
        value: 'Villains',
        routerLink: './'
      }
    ];
  }
}
