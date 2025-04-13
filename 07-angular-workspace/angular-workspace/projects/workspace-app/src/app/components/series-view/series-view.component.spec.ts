import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesViewComponent } from './series-view.component';

describe('SeriesViewComponent', () => {
  let component: SeriesViewComponent;
  let fixture: ComponentFixture<SeriesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
