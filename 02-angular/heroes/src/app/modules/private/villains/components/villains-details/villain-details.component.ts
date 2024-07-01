import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from '../../../services/marvel.service';
import { Observable } from 'rxjs';
import { CharacterDetails } from '../../../../../api/response/marvel-data.interface';
import { MarvelPortraitThumbnails } from '../../../enums/marvel-portrait-thumbnails.enum';

@Component({
  selector: 'app-villains-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.scss']
})
export class VillainDetailsComponent implements OnInit {
  public characterDetails$: Observable<CharacterDetails>;
  public navBarList: { value: string, routerLink: string }[];

  public THUMBNAIL_SIZE: MarvelPortraitThumbnails = MarvelPortraitThumbnails.INCREDIBLE;

  private _characterId: number;

  constructor(private _marvelService: MarvelService,
              private route: ActivatedRoute) {
    this.characterDetails$ = new Observable<CharacterDetails>();
    this.navBarList = [];
    this._characterId = 0;
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._characterId = Number(this.route.snapshot.paramMap.get('id'));
    this.characterDetails$ = this._marvelService.getCharacterById(this._characterId);
    this.navBarList = [
      {
        value: 'Villains',
        routerLink: '../../'
      }
    ];
  }
}
