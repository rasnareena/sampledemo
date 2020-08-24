import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsystemComponent } from './tabsystem.component';

describe('TabsystemComponent', () => {
  let component: TabsystemComponent;
  let fixture: ComponentFixture<TabsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
