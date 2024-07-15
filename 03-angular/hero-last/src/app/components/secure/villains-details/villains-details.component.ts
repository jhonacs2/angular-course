import { Component, inject, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { MarvelThumbnailPipe } from '../../../pipes/marvel-thumbnail.pipe';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../../../api/response/marvel-data.interface';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';
import { MarvelService } from '../../../services/marvel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villains-details',
  standalone: true,
  imports: [
    NavBarComponent,
    MarvelThumbnailPipe,
    AsyncPipe
  ],
  templateUrl: './villains-details.component.html',
  styleUrl: './villains-details.component.scss'
})
export class VillainsDetailsComponent implements OnInit {
  public characterDetails$: Observable<CharacterDetails>;
  public navBarList: { value: string, routerLink: string }[];

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.INCREDIBLE;

  private _characterId: number;
  private _marvelService: MarvelService = inject(MarvelService);
  private _route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.characterDetails$ = new Observable<CharacterDetails>();
    this.navBarList = [];
    this._characterId = 0;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._characterId = Number(this._route.snapshot.paramMap.get('id'));
    this.characterDetails$ = this._marvelService.getCharacterById(this._characterId);
    this.navBarList = [
      {
        value: 'Villains',
        routerLink: '../'
      }
    ];
  }
}
