import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosItemComponent } from './todos-item.component';

describe('TodosItemComponent', () => {
  let component: TodosItemComponent;
  let fixture: ComponentFixture<TodosItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosItemComponent]
    });
    fixture = TestBed.createComponent(TodosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
