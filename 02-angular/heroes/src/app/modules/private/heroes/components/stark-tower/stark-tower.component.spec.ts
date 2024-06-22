import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarkTowerComponent } from './stark-tower.component';

describe('StarkTowerComponent', () => {
  let component: StarkTowerComponent;
  let fixture: ComponentFixture<StarkTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarkTowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarkTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
