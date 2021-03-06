import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Language } from '../../../models/language.interface';
import { LanguageService } from '../../../services/language.service';
import { UiService } from '../../../services/ui.service';
import { Title } from '@angular/platform-browser';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
    selector: 'home-container-component',
    templateUrl: 'home-container.component.html'
})
export class HomeContainerComponent implements OnInit {
    public message: string;
    languageList: any[] = [];
    loading: boolean;
    pageError: string;
    
    constructor(
        private languageService: LanguageService, 
        private uiService: UiService,
        private titleService: Title
    ) { }

    toggleSearch(searchString) {
        this.uiService.toggleSearch(searchString);
    }

    ngOnInit() {
        this.loading = true;
        this.titleService.setTitle(`Syntax`); 
        this.languageService.getLang()
            .subscribe(data => {
                this.languageList = data;
                this.loading = false;
            },
            err => {
                this.loading = false;
                this.pageError = `Error: ${err.statusText}`;
            }
        );
    }
}
