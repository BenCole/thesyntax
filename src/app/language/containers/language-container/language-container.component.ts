import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyntaxService } from '../../../services/syntax.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'language-container',
    templateUrl: './language-container.component.html',
    styleUrls: ['./language-container.component.scss']
})
export class LanguageContainerComponent implements OnInit {
    lang: string;
    list;
    filterString: string;
    loading: boolean;
    pageError: string;
    icon: string;

    constructor(
        private route: ActivatedRoute, 
        private syntaxService: SyntaxService,
        private titleService: Title
    ) { }

    generateIcon() {
        if (this.lang === 'SASS') {
            this.icon = 'devicon-sass-original';
        } else if (this.lang === 'angular') {
            this.icon = `devicon-angularjs-plain`;
        } else { 
            this.icon = `devicon-${this.lang}-plain`;
        }
    }

    ngOnInit() {
     
        this.loading = true;
        this.route.params.subscribe(params => {
            this.lang = params.lang;
            this.generateIcon();
            this.titleService.setTitle(`${this.lang} - Syntax`); 
           
            this.syntaxService.index(this.lang)
                .subscribe(list => {
                    this.list = list.data;
                    this.loading = false;
                },
                err => {
                    this.loading = false;
                    this.pageError = `Error: ${err.statusText}`;
                }
            );
        });
    }
}