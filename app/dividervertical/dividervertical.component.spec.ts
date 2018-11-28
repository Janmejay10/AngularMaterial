import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerverticalComponent } from './dividervertical.component';

describe('DividerverticalComponent', () => {
  let component: DividerverticalComponent;
  let fixture: ComponentFixture<DividerverticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerverticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerverticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
