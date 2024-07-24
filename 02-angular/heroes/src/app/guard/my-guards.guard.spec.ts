import { TestBed } from '@angular/core/testing';

import { MyGuardsGuard } from './my-guards.guard';

describe('MyGuardsGuard', () => {
  let guard: MyGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
