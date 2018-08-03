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

    constructor(
        private route: ActivatedRoute, 
        private syntaxService: SyntaxService,
        private titleService: Title
    ) { }

    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(params => {
            this.lang = params.lang;
            this.titleService.setTitle(`${this.lang} - Syn.tax`);
           
            this.syntaxService.index(this.lang)
                .subscribe(list => {
                    this.list = list.data;
                    this.loading = false;
                });
        });
    }
}