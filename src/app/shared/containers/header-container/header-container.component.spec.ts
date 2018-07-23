
import { TestBed, inject, ComponentFixture } from '@angular/core/testing';
import { HeaderContainerComponent } from './header-container.component';
import { LogoComponent } from '../../components/logo/logo.component';

describe('header container component', () => {

    // make it a variable
    
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

    describe('shallow test', () => {
        let component: HeaderContainerComponent;
        let fixture: ComponentFixture<HeaderContainerComponent>;

        // create module
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ HeaderContainerComponent, LogoComponent ]
            })
            .compileComponents();
        });

        // create component instance and detect changed
        beforeEach(() => {
            fixture = TestBed.createComponent(HeaderContainerComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should exist', () => {
          expect(component).toBeTruthy();
        });
    });
});