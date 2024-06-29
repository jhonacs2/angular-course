import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoomLairComponent } from './doom-lair.component';

describe('DoomLairComponent', () => {
  let component: DoomLairComponent;
  let fixture: ComponentFixture<DoomLairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoomLairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoomLairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
