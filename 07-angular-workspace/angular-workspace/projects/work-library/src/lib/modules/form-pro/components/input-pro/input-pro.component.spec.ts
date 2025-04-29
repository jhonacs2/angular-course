import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProComponent } from './input-pro.component';

describe('InputProComponent', () => {
  let component: InputProComponent;
  let fixture: ComponentFixture<InputProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
