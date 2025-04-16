import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEditorComponent } from './work-editor.component';

describe('WorkPdfComponent', () => {
  let component: WorkEditorComponent;
  let fixture: ComponentFixture<WorkEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
