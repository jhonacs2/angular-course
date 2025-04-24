import { TestBed } from '@angular/core/testing';

import { TodoFacadeService } from './todo-facade.service';

describe('TodoFacadeService', () => {
  let service: TodoFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
