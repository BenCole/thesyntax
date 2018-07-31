import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageContainerComponent } from './language-container.component';
import { RouterModule } from '@angular/router';

describe('LanguageContainerComponent', () => {
    let component: LanguageContainerComponent;
    let fixture: ComponentFixture<LanguageContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LanguageContainerComponent],
            imports: [
                RouterModule
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
