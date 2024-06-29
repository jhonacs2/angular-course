import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../services/marvel.service';
import { avengers, selectRandomAvenger } from '../../../utils/select-random-avenger.function';
import { first } from 'rxjs/operators';
import { CharacterDetails } from '../../../../../api/response/marvel-data.interface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  avengerPosition: number;
  characterDetails!: CharacterDetails;
  thumbnail: string;
  numberOfAvenger: number = 0;

  constructor(private _marvelService: MarvelService) {
    this.avengerPosition = 1;
    this.thumbnail = '';
    this.numberOfAvenger = avengers.length;
  }

  ngOnInit(): void {
    this._initialize();
  }

  itemSelectedChange(itemSelect: number) {
    const avengerSelected = avengers[itemSelect];
    this._getCharacterByName(avengerSelected);
  }

  private _initialize(): void {
    const avengerSelected = selectRandomAvenger();
    this.avengerPosition = avengers.findIndex(avenger => avenger === avengerSelected);
    this._getCharacterByName(avengerSelected);
  }

  private _getCharacterByName(characterName: string): void {
    this._marvelService.getCharacterByName(characterName)
      .pipe(first())
      .subscribe(characterDetails => {
        this.characterDetails = characterDetails;
        this.thumbnail = `${this.characterDetails.thumbnail.path}.${this.characterDetails.thumbnail.extension}`;
      }, error => console.error('Error fetching character details:', error));
  }
}
