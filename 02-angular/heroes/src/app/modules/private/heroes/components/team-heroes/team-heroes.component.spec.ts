import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamHeroesComponent } from './team-heroes.component';

describe('TeamHeroesComponent', () => {
  let component: TeamHeroesComponent;
  let fixture: ComponentFixture<TeamHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
