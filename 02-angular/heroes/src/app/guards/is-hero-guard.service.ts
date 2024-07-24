import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Injectable({
  providedIn: 'root'
})
export class IsHeroGuard implements CanLoad {
  constructor(private _characterService: CharacterService, private _router: Router) {
  }

  canLoad(): boolean {
    const hasUsername = this._characterService.characterDetails.username.trim().length > 0;

    if (!hasUsername) {
      this._router.navigate(['/login']);
    }

    return hasUsername;
  }
}
