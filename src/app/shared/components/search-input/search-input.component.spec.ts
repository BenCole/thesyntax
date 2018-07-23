import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';

describe('search input component', () => {

    let fixture: ComponentFixture<SearchInputComponent>;
    let component: SearchInputComponent;
    let element;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchInputComponent
            ]
        })
        .compileComponents();
    });
    
    beforeEach(() => {
        fixture = TestBed.createComponent(SearchInputComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should have an input', () => {
       expect(element.querySelector('input')).toBeTruthy();
    });

    it('should emit a event when someone starts typing', () => {
        spyOn(component.typingStarted, 'emit');
        element.querySelector('input').dispatchEvent(new Event('keyup'));
        fixture.detectChanges();
        expect(component.typingStarted.emit).toHaveBeenCalled();        
    });
});
