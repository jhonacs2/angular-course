import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from '../api/responses/user-response.interface';
import { UserRequest } from '../api/request/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  public getUsers(): Observable<UserResponse[]> {
    return this._http.get<UserResponse[]>('https://jsonplaceholder.typicode.com/users');
  }

  public createUser(user: UserRequest): Observable<UserResponse> {
    return this._http.post<UserResponse>('https://jsonplaceholder.typicode.com/users', user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this._http.delete<void>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
