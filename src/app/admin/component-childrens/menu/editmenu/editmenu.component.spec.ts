import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenuComponent } from './editmenu.component';

describe('EditmenuComponent', () => {
  let component: EditmenuComponent;
  let fixture: ComponentFixture<EditmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditmenuComponent]
    });
    fixture = TestBed.createComponent(EditmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
