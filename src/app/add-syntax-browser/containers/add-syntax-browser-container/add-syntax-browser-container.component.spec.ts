import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSyntaxBrowserContainerComponent } from './add-syntax-browser-container.component';

describe('AddSyntaxBrowserContainerComponent', () => {
  let component: AddSyntaxBrowserContainerComponent;
  let fixture: ComponentFixture<AddSyntaxBrowserContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSyntaxBrowserContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSyntaxBrowserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
