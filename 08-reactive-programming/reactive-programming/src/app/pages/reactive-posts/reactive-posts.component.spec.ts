import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePostsComponent } from './reactive-posts.component';

describe('ReactivePostsComponent', () => {
  let component: ReactivePostsComponent;
  let fixture: ComponentFixture<ReactivePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
