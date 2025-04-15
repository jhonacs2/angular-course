import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLibraryComponent } from './work-library.component';

describe('WorkLibraryComponent', () => {
  let component: WorkLibraryComponent;
  let fixture: ComponentFixture<WorkLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
