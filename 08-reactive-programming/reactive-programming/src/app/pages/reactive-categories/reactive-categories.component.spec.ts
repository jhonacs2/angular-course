import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCategoriesComponent } from './reactive-categories.component';

describe('ReactiveCategoriesComponent', () => {
  let component: ReactiveCategoriesComponent;
  let fixture: ComponentFixture<ReactiveCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
