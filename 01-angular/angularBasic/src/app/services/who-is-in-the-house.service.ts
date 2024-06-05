import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhoIsInTheHouseService {
  private _name: Subject<string> = new Subject<string>();

  get name(): Subject<string> {
    return this._name;
  }

  public setName(name: string): void {
    this._name.next(name);
  }
}
