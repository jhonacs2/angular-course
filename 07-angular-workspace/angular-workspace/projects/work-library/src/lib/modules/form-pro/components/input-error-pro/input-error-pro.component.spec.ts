import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorProComponent } from './input-error-pro.component';

describe('InputErrorProComponent', () => {
  let component: InputErrorProComponent;
  let fixture: ComponentFixture<InputErrorProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputErrorProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
