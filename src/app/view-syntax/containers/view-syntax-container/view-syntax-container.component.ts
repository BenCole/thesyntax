import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
    selector: 'view-syntax-container',
    templateUrl: './view-syntax-container.component.html',
    styleUrls: ['./view-syntax-container.component.scss']
})
export class ViewSyntaxContainerComponent implements OnInit {

    id: string;
    lang: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.syntax;
            this.lang = params.lang;
        });
    }

}
