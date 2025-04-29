import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CharacterService} from './services/character.service';
import {BehaviorSubject, merge, Observable, Subject} from 'rxjs';
import {ICharacter} from './interfaces/character.interface';
import {ActivityService} from './services/activity.service';
import {ActivityResponse} from './interfaces/activity-response.interface';
import {map, scan, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'tm-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  isOpenModal$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  characterData$: Observable<ICharacter> = this._characterService.characterState$;

  private _addActivitySubject = new Subject<ActivityResponse>();
  private _initialActivities$: Observable<ActivityResponse[]> = this._activityService.getActivities().pipe(
    shareReplay({bufferSize: 1, refCount: true})
  );

  activities$: Observable<ActivityResponse[]> = merge(
    this._initialActivities$,
    this._addActivitySubject.pipe(map(newActivity => [newActivity]))
  ).pipe(scan((acc: ActivityResponse[], curr) => [...acc, ...curr], []));

  constructor(private _characterService: CharacterService,
              private _activityService: ActivityService) {
  }

  setOpenModal(isOpen: boolean): void {
    this.isOpenModal$.next(isOpen);
  }

  createActivity(activityResponse: ActivityResponse): void {
    this._addActivitySubject.next(activityResponse);
  }

  trackByActivity(i: number, activity: ActivityResponse): number {
    return activity.id;
  }
}
