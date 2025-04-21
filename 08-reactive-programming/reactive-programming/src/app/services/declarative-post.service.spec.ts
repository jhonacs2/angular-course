import { TestBed } from '@angular/core/testing';

import { DeclarativePostService } from './declarative-post.service';

describe('DeclarativePostService', () => {
  let service: DeclarativePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarativePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
