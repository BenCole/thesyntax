import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Language } from '../../../models/language.interface';
import { LanguageService } from '../../../services/language.service';
import { UiService } from '../../../services/ui.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'home-container-component',
    templateUrl: 'home-container.component.html'
})
export class HomeContainerComponent implements OnInit {
    public message: string;
    
    languageList: Language[];
    loading: boolean;
    
    constructor(
        private http: Http, 
        private languageService: LanguageService, 
        private uiService: UiService,
        private titleService: Title
    ) { }

    toggleSearch(searchString) {
        this.uiService.toggleSearch(searchString);
    }

    ngOnInit() {
        this.loading = true;
        this.titleService.setTitle(`Syn.tax`); 
        this.languageService.getLanguages()
            .subscribe(langs => {
                this.languageList = langs.data;
                this.loading = false;
            });
    }
}
