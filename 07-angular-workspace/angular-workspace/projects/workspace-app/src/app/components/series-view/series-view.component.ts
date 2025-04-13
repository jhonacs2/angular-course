import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RickAndMortyService} from '../../services/rick-and-morty.service';
import {map} from 'rxjs/operators';
import {Result} from '../../interfaces/character-request.interface';
import {Observable} from 'rxjs';

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
  characters$ = new Observable<Result[]>();

  constructor(private _rickAndMortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.characters$ = this._rickAndMortyService.getCharacters().pipe(map(characters => characters.results));
  }
}
