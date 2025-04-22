import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUsuComponent } from './reg-usu.component';

describe('RegUsuComponent', () => {
  let component: RegUsuComponent;
  let fixture: ComponentFixture<RegUsuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegUsuComponent]
    });
    fixture = TestBed.createComponent(RegUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
