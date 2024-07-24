import { Observable } from 'rxjs';

export interface ComponentExit {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
