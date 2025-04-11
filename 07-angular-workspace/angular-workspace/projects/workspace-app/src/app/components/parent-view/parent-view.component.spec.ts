import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewComponent } from './parent-view.component';

describe('ParentViewComponent', () => {
  let component: ParentViewComponent;
  let fixture: ComponentFixture<ParentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
