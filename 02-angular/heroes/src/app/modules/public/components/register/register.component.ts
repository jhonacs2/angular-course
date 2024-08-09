import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentExit } from '../../../../interfaces/component-exit.interface';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ComponentExit, OnDestroy {
  private _unsubscribe: Subject<void>;

  constructor() {
    this._unsubscribe = new Subject<void>();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    console.log('Register Destroyed');
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public initializeInterval(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
    this._unsubscribe = new Subject<void>();
    this._resetIntervals();
  }

  private _resetIntervals() : void {
    interval(1000).pipe(takeUntil(this._unsubscribe)).subscribe((value) => console.log(value));
    interval(1000).pipe(takeUntil(this._unsubscribe)).subscribe((value) => console.log(value));
    interval(1000).pipe(takeUntil(this._unsubscribe)).subscribe((value) => console.log(value));
    interval(1000).pipe(takeUntil(this._unsubscribe)).subscribe((value) => console.log(value));
    interval(1000).pipe(takeUntil(this._unsubscribe)).subscribe((value) => console.log(value));
  }

  public canExit(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to leave?');
  }
}
