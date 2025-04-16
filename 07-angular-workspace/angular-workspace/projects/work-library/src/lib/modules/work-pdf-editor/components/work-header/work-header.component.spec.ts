import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHeaderComponent } from './work-header.component';

describe('WorkHeaderComponent', () => {
  let component: WorkHeaderComponent;
  let fixture: ComponentFixture<WorkHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
