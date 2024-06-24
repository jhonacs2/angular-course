import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../../services/marvel.service';
import { selectRandomAvenger } from '../../../utils/select-random-avenger.function';
import { first } from 'rxjs/operators';
import { ResultMarvel } from '../../../../../api/response/marvel-data.interface';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  characterDetails!: ResultMarvel;
  thumbnail: string;

  constructor(private _marvelService: MarvelService) {
    this.thumbnail = '';
  }

  ngOnInit(): void {
    this._marvelService.getCharacterByName(selectRandomAvenger()).pipe(first()).subscribe(characterDetails => {
      this.characterDetails = characterDetails;
      this.thumbnail = `${this.characterDetails.thumbnail.path}.${this.characterDetails.thumbnail.extension}`;
    });
  }
}
