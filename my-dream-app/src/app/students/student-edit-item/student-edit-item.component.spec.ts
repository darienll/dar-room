import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditItemComponent } from './student-edit-item.component';

describe('StudentEditItemComponent', () => {
  let component: StudentEditItemComponent;
  let fixture: ComponentFixture<StudentEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
