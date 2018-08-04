import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageListComponent } from './language-list-component.component';
import { Language } from '../../../models/language.interface';
import { RouterModule } from '../../../../../node_modules/@angular/router';

describe('LanguageListComponentComponent', () => {
    let component: LanguageListComponent;
    let fixture: ComponentFixture<LanguageListComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LanguageListComponent],
            imports: [
                RouterModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });

    it('should have a iterate over the languages array', () => {
        // component.languages = [
        //     {
        //         name: 'javascript',
        //         icon: 'devicon-javascript-plain'
        //     },
        //     {
        //         name: 'typescript',
        //         icon: 'devicon-typescript-plain'
        //     }
        // ];
        fixture.detectChanges();
        expect(element.querySelector('.button--primary').innerHTML).toContain('javascript');
    });
});
