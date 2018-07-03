import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldContainerComponent } from './textfield-container.component';

describe('TextfieldContainerComponent', () => {
  let component: TextfieldContainerComponent;
  let fixture: ComponentFixture<TextfieldContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
