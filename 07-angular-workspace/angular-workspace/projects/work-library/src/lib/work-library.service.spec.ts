import { TestBed } from '@angular/core/testing';

import { WorkLibraryService } from './work-library.service';

describe('WorkLibraryService', () => {
  let service: WorkLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
