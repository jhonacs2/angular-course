import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormComponent } from './complex-form.component';

describe('ComplexFormComponent', () => {
  let component: ComplexFormComponent;
  let fixture: ComponentFixture<ComplexFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
