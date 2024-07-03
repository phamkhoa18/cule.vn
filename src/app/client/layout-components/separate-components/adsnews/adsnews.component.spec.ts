import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsnewsComponent } from './adsnews.component';

describe('AdsnewsComponent', () => {
  let component: AdsnewsComponent;
  let fixture: ComponentFixture<AdsnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsnewsComponent]
    });
    fixture = TestBed.createComponent(AdsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
