
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { HeaderContainerComponent } from './header-container.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { MenuToggleComponent } from '../../components/menu-toggle/menu-toggle.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';

describe('header container component', () => {

    let component: HeaderContainerComponent;
    let fixture: ComponentFixture<HeaderContainerComponent>;
    let element;

    // create module
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderContainerComponent,
                LogoComponent,
                MenuToggleComponent,
                SearchInputComponent
            ]
        })
        .compileComponents();
    });

    // create component instance and detect changed
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderContainerComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });

    describe('toggle menu', () => {
        
        it('should use the menu-toggle component', () => {
            expect(element.querySelector('menu-toggle')).toBeTruthy();
        });

        it('should have a menuOpen property', () => {
           expect(component.menuOpen).toBeDefined();
        });

        it('should have a toggleMenu function', () => {
            expect(component.toggleMenu).toBeDefined();
        });

        it('should toggle the menuOpen variable when called', () => {
            component.menuOpen = false;
            component.toggleMenu();
            fixture.detectChanges();
            expect(component.menuOpen).toBe(true);
        });
    });

    describe('search input', () => {
        it('should use the search input component', () => {
            expect(element.querySelector('search-input')).toBeTruthy();
        });
    });

    //ISOLATE

    // describe('isolate test', function () {
    // let subject: HeaderContainerComponent;
    //     //add it to a module

    //     beforeEach(() => {
    //         TestBed.configureTestingModule({
    //             providers: [
    //                 HeaderContainerComponent
    //             ]
    //         });
    //     });

    //     //inject is like the constructor
    //     beforeEach(inject([HeaderContainerComponent], (headerContainer: HeaderContainerComponent) => {
    //         subject = headerContainer;
    //         // call methods here if needed
    //     }));

    //     it('should do something', () => {
    //     });
    // });
});