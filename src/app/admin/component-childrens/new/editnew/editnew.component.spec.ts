import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnewComponent } from './editnew.component';

describe('EditnewComponent', () => {
  let component: EditnewComponent;
  let fixture: ComponentFixture<EditnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditnewComponent]
    });
    fixture = TestBed.createComponent(EditnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
