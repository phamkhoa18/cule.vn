import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVisiterComponent } from './our-visiter.component';

describe('OurVisiterComponent', () => {
  let component: OurVisiterComponent;
  let fixture: ComponentFixture<OurVisiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurVisiterComponent]
    });
    fixture = TestBed.createComponent(OurVisiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
