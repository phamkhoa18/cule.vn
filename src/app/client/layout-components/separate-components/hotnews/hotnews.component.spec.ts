import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotnewsComponent } from './hotnews.component';

describe('HotnewsComponent', () => {
  let component: HotnewsComponent;
  let fixture: ComponentFixture<HotnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotnewsComponent]
    });
    fixture = TestBed.createComponent(HotnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
