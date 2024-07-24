import { TestBed } from '@angular/core/testing';

import { IsHeroGuard } from './is-hero-guard.service';

describe('IsHeroeGuard', () => {
  let guard: IsHeroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsHeroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
