import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Injectable({
  providedIn: 'root'
})
export class IsHeroActiveGuard implements CanActivate {
  constructor(private _characterService: CharacterService,
              private _router: Router) {
  }

  canActivate(): boolean {
    const hasUsername = this._characterService.characterDetails.username.trim().length > 0;

    if (!hasUsername) {
      this._router.navigate(['/login']);
    }

    return hasUsername;
  }
}
