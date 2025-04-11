import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'ad-avatar-profile',
  templateUrl: './avatar-profile.component.html',
  styleUrls: ['./avatar-profile.component.scss']
})
export class AvatarProfileComponent implements OnInit {
  public name!: string;
  public pic!: string;

  constructor(private _profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.name = this._profileService.fullName;
    this.pic = this._profileService.profilePic;
  }
}
