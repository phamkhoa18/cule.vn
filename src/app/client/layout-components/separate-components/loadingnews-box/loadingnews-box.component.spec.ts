import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingnewsBoxComponent } from './loadingnews-box.component';

describe('LoadingnewsBoxComponent', () => {
  let component: LoadingnewsBoxComponent;
  let fixture: ComponentFixture<LoadingnewsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingnewsBoxComponent]
    });
    fixture = TestBed.createComponent(LoadingnewsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
