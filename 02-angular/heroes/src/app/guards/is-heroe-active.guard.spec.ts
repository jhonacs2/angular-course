import { TestBed } from '@angular/core/testing';

import { IsHeroActiveGuard } from './is-hero-active-guard.service';

describe('IsHeroeActiveGuard', () => {
  let guard: IsHeroActiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsHeroActiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
