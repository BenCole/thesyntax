import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSyntaxContainerComponent } from './view-syntax-container.component';

describe('ViewSyntaxContainerComponent', () => {
  let component: ViewSyntaxContainerComponent;
  let fixture: ComponentFixture<ViewSyntaxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSyntaxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSyntaxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
