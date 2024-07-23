import { Injectable } from '@angular/core';
import { TeamType } from '../type/team.type';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _characterDetails: { username: string, team: TeamType };

  constructor() {
    this._characterDetails = {
      username: '',
      team: 'Heroes'
    };
  }

  get characterDetails(): { username: string; team: TeamType } {
    return this._characterDetails;
  }

  set characterDetails(value: { username: string; team: TeamType }) {
    this._characterDetails = value;
  }
}
