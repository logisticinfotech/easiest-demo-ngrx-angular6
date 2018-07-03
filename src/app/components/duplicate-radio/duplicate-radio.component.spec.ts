import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateRadioComponent } from './duplicate-radio.component';

describe('DuplicateRadioComponent', () => {
  let component: DuplicateRadioComponent;
  let fixture: ComponentFixture<DuplicateRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
