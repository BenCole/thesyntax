
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('logo component', () => {
    // integration test
    describe('integration test', () => {
        let component: LogoComponent;
        let fixture: ComponentFixture<LogoComponent>;
        let element;

        // make a module
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [
                    LogoComponent
                ]
            })
            .compileComponents();
        });

        // make an instance of the conponent
        beforeEach(() => {
            fixture = TestBed.createComponent(LogoComponent);
            component = fixture.componentInstance;
            element = fixture.nativeElement;
            fixture.detectChanges();
        });

        it('should contain the logo span', () => {
            expect(element.querySelector('.logo')).toBeTruthy();
        });

        it('should contain 2 brackets', () => {
            expect(element.querySelectorAll('.bracket').length).toBe(2);
        });

        it('should contain the theSynt.tax wording', () => {
            expect(element.querySelector('.logo').innerHTML).toMatch('the');
            expect(element.querySelector('.logo').innerHTML).toMatch('Syn.tax');
        });
    });
});