import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRouteComponent } from './side-route.component';

describe('SideRouteComponent', () => {
  let component: SideRouteComponent;
  let fixture: ComponentFixture<SideRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
