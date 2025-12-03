import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoView } from './to-do-view';

describe('ToDoView', () => {
  let component: ToDoView;
  let fixture: ComponentFixture<ToDoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
