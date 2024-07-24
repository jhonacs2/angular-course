import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ComponentExit } from '../interfaces/component-exit.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<ComponentExit> {
  canDeactivate(component: ComponentExit): Observable<boolean> | Promise<boolean> | boolean {
    return component.canExit();
  }
}
