import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioContainerComponent } from './radio-container.component';

describe('RadioContainerComponent', () => {
  let component: RadioContainerComponent;
  let fixture: ComponentFixture<RadioContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
