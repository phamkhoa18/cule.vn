import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwncarouselComponent } from './owncarousel.component';

describe('OwncarouselComponent', () => {
  let component: OwncarouselComponent;
  let fixture: ComponentFixture<OwncarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwncarouselComponent]
    });
    fixture = TestBed.createComponent(OwncarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
