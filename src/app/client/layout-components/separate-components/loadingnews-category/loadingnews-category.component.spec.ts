import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingnewsCategoryComponent } from './loadingnews-category.component';

describe('LoadingnewsCategoryComponent', () => {
  let component: LoadingnewsCategoryComponent;
  let fixture: ComponentFixture<LoadingnewsCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingnewsCategoryComponent]
    });
    fixture = TestBed.createComponent(LoadingnewsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
