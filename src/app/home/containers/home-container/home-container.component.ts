import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Language } from '../../../models/language.interface';
import { LanguageService } from '../../../services/language.service';
import { UiService } from '../../../services/ui.service';

@Component({
    selector: 'home-container-component',
    templateUrl: 'home-container.component.html'
})
export class HomeContainerComponent implements OnInit {
    public message: string;
    
    languageList: Language[];
    
    constructor(private http: Http, private languageService: LanguageService, private uiService: UiService) { }

    toggleSearch(searchString) {
        this.uiService.toggleSearch(searchString);
    }

    ngOnInit() {
        this.languageService.getLanguages()
            .subscribe(langs => this.languageList = langs);
    }
}
