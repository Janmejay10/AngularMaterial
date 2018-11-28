import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Select1Component } from './select1.component';

describe('Select1Component', () => {
  let component: Select1Component;
  let fixture: ComponentFixture<Select1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Select1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Select1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
