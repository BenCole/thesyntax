import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuContainerComponent } from './mobile-menu-container.component';

describe('MobileMenuContainerComponent', () => {
  let component: MobileMenuContainerComponent;
  let fixture: ComponentFixture<MobileMenuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
