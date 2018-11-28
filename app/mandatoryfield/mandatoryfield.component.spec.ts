import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryfieldComponent } from './mandatoryfield.component';

describe('MandatoryfieldComponent', () => {
  let component: MandatoryfieldComponent;
  let fixture: ComponentFixture<MandatoryfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatoryfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatoryfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
