import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyntaxContainerComponent } from './add-syntax-container.component';

describe('AddSyntaxContainerComponent', () => {
  let component: AddSyntaxContainerComponent;
  let fixture: ComponentFixture<AddSyntaxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSyntaxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSyntaxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
