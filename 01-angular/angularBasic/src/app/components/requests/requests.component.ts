import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../api/responses/user-response.interface';
import { UserRequest } from '../../api/request/user-request.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  public users: UserResponse[];

  private _unsubscribe: Subject<void>;

  constructor(private _userService: UserService) {
    this.users = [];
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number): void {
    this._userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  createUser(username: string): void {
    const userRequest: UserRequest = {
      name: username.split(' ').join('.'),
      username: username.trim(),
      email: `${username.split(' ').join('')}@gmail.com`,
      phone: '777777777',
      website: `${username.split(' ').join('')}.com`,
    };
    this._userService.createUser(userRequest)
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(userResponse => {
        this.users.push(userResponse);
      });
  }
}

/*this._getUsers().subscribe(users => {
      console.log('users', users);
    });*/

/* fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((json) => console.log(json)); */
