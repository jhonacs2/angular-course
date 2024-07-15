import { Component, OnInit } from '@angular/core';
import { CharacterDetails } from '../../../api/response/marvel-data.interface';
import { MarvelService } from '../../../services/marvel.service';
import { avengers, selectRandomAvenger } from '../../../utils/select-random-avenger.function';
import { first } from 'rxjs';
import { CharactersCarouselComponent } from '../chracters-carousel/characters-carousel.component';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [
    CharactersCarouselComponent,
    LoadingComponent
  ],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
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

  itemSelectedChange(itemSelect: number): void {
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
      .subscribe({
        next: (characterDetails) => {
          this.characterDetails = characterDetails;
          this.thumbnail = `${this.characterDetails.thumbnail.path}.${this.characterDetails.thumbnail.extension}`;
        },
        error: (err) => console.error('Error fetching character details', err)
      });
  }
}
