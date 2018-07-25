import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'language-container',
    templateUrl: './language-container.component.html',
    styleUrls: ['./language-container.component.scss']
})
export class LanguageContainerComponent implements OnInit {
    lang: string;
    list;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.lang = params.lang;
        });

        this.list = [
            {
                name: 'for loop',
                id: 'for-loop'
            },
            {
                name: 'varaiable',
                id: 'variable'
            }
        ];
    }

}