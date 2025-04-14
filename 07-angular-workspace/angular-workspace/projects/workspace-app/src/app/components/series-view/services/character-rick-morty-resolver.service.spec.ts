import { TestBed } from '@angular/core/testing';

import { CharacterRickMortyResolverService } from './character-rick-morty-resolver.service';

describe('CharacterRickMortyResolverService', () => {
  let service: CharacterRickMortyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRickMortyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
