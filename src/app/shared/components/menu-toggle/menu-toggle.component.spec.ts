// import tedbed and item
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MenuToggleComponent } from './menu-toggle.component';

describe('menu toggle component', () => {
    describe('isolate testing', () => {
        let fixture: ComponentFixture<MenuToggleComponent>;
        let component: MenuToggleComponent;
        let element;
        
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    MenuToggleComponent
                ]
            })
            .compileComponents();
        });
        beforeEach(() => {
           fixture = TestBed.createComponent(MenuToggleComponent);
           component = fixture.componentInstance;
           element = fixture.nativeElement;
           fixture.detectChanges();
        });

        it('should contain the menu toggle icon, only 1 at a time', () => {
            expect(element.querySelectorAll('i').length).toEqual(1);
        });

        it('should emit an open menu event', () => {
            spyOn(component.menuToggled, 'emit');
            component.toggleMenu();
            fixture.detectChanges();
            expect(component.menuToggled.emit).toHaveBeenCalled();
        });

        it('should have an open icon when active', () => {
            component.menuOpen = true;
            fixture.detectChanges();
            expect(element.querySelectorAll('.syntax-icon-times').length).toEqual(1);
            expect(element.querySelectorAll('.syntax-icon-bars').length).toEqual(0);
        });

        it('should have a close icon when active', () => {
            component.menuOpen = false; 
            fixture.detectChanges();
            expect(element.querySelectorAll('.syntax-icon-bars').length).toEqual(1);
            expect(element.querySelectorAll('.syntax-icon-items').length).toEqual(0);
        });
    });
});
