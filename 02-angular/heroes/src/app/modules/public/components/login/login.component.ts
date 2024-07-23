import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../../../services/character.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _characterService: CharacterService,
              private _route: Router) {
  }

  ngOnInit(): void {
  }

  login(username: HTMLInputElement, password: HTMLInputElement): void {
    if (username.value === 'ironman') {
      this._characterService.characterDetails = {
        username: 'Iron Man',
        team: 'Heroes'
      };
      this._route.navigate(['./heroes']);
      return;
    }
    this._characterService.characterDetails = {
      username: 'Dr. Doom',
      team: 'Villains'
    };
    this._route.navigate(['./heroes/doom_lair']);
  }
}
