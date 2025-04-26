import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivityResponse} from '../interfaces/activity-response.interface';
import {Observable} from 'rxjs';

@Injectable()
export class ActivityService {

  constructor(private _httpClient: HttpClient) {
  }

  getActivities(): Observable<ActivityResponse[]> {
    return this._httpClient.get<ActivityResponse[]>('assets/activities.json');
  }
}
