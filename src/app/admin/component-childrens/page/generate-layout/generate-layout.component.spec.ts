import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLayoutComponent } from './generate-layout.component';

describe('GenerateLayoutComponent', () => {
  let component: GenerateLayoutComponent;
  let fixture: ComponentFixture<GenerateLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateLayoutComponent]
    });
    fixture = TestBed.createComponent(GenerateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
