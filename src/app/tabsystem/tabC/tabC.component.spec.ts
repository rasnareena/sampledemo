import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCComponent } from './tabC.component';

describe('TabCComponent', () => {
  let component: TabCComponent;
  let fixture: ComponentFixture<TabCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
