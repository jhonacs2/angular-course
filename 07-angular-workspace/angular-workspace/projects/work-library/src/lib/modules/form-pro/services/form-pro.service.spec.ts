import { TestBed } from '@angular/core/testing';

import { FormProService } from './form-pro.service';

describe('FormProService', () => {
  let service: FormProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
