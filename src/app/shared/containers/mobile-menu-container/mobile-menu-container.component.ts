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
    pageError: string;

    constructor(
        private languageService: LanguageService,
        private uiService: UiService) { }

    ngOnInit() {
        this.languageService.getLang()
            .subscribe(data => {
                this.languageList = data;
            },
            err => {
                this.pageError = `Error: ${err.statusText}`;
            }
        );

        this.uiService.menuOpen
            .subscribe(status => {
                this.menuOpen = status;
            });
        
    }
}
