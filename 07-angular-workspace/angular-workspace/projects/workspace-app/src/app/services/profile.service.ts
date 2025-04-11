import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _fullName: string;
  private _profilePic: string;

  constructor() {
    this._fullName = '';
    this._profilePic = '';
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get profilePic(): string {
    return this._profilePic;
  }

  set profilePic(value: string) {
    this._profilePic = value;
  }
}
