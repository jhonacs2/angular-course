import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnocentComponent } from './innocent.component';

describe('InocentComponent', () => {
  let component: InnocentComponent;
  let fixture: ComponentFixture<InnocentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnocentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
