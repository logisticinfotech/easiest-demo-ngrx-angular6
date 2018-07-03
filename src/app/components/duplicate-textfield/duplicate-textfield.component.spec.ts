import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateTextfieldComponent } from './duplicate-textfield.component';

describe('DuplicateTextfieldComponent', () => {
  let component: DuplicateTextfieldComponent;
  let fixture: ComponentFixture<DuplicateTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
