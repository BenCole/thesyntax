import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxListComponent } from './syntax-list.component';

describe('SyntaxListComponent', () => {
    let component: SyntaxListComponent;
    let fixture: ComponentFixture<SyntaxListComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SyntaxListComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SyntaxListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should exist', () => {
        expect(component).toBeTruthy();
    });

    it('should iterate over the list', () => {
        component.list = [
            {
                name: 'for loop',
                id: 'for-loop'
            }
        ];
        fixture.detectChanges();

        expect(element.querySelector('li').innerHTML).toContain('for loop');
        expect(element.querySelectorAll('li').length).toBe(1);
    });

});
