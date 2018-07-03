import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateTabsComponent } from './duplicate-tabs.component';

describe('DuplicateTabsComponent', () => {
  let component: DuplicateTabsComponent;
  let fixture: ComponentFixture<DuplicateTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicateTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
