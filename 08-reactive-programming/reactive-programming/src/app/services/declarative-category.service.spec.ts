import { TestBed } from '@angular/core/testing';

import { DeclarativeCategoryService } from './declarative-category.service';

describe('DeclarativeCategoryService', () => {
  let service: DeclarativeCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarativeCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
