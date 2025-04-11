import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranpaViewComponent } from './granpa-view.component';

describe('GranpaViewComponent', () => {
  let component: GranpaViewComponent;
  let fixture: ComponentFixture<GranpaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranpaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GranpaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
