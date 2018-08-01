import { Component, OnInit } from '@angular/core';
import { Language } from '../../../models/language.interface';
import { LanguageService } from '../../../services/language.service';
import { UiService } from '../../../services/ui.service';

@Component({
    selector: 'mobile-menu-container',
    templateUrl: './mobile-menu-container.component.html',
    styleUrls: ['./mobile-menu-container.component.scss']
})
export class MobileMenuContainerComponent implements OnInit {

    languageList: Language[]; 
    menuOpen: boolean;

    constructor(private languageService: LanguageService, private uiService: UiService) { }

    ngOnInit() {
        this.languageService.getLanguages()
            .subscribe(lang => this.languageList = lang);

        this.uiService.menuOpen
            .subscribe(status => {
                this.menuOpen = status;
            });
        
    }
}
