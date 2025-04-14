import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Result} from '../../interfaces/character-request.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ad-series-view',
  templateUrl: './series-view.component.html',
  styleUrls: ['./series-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'
  }
})
export class SeriesViewComponent implements OnInit {
  characters: Result[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(response => {
      this.characters = response.characters;
      console.log(this.characters)
    });
    // this.characters$ = this._rickAndMortyService.getCharacters().pipe(map(characters => characters.results));
  }
}
