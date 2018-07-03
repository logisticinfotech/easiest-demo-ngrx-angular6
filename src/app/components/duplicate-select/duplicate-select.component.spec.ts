import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateSelectComponent } from './duplicate-select.component';

describe('DuplicateSelectComponent', () => {
  let component: DuplicateSelectComponent;
  let fixture: ComponentFixture<DuplicateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
