import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsDetailsComponent } from './villains-details.component';

describe('VillainsDetailsComponent', () => {
  let component: VillainsDetailsComponent;
  let fixture: ComponentFixture<VillainsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillainsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillainsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
