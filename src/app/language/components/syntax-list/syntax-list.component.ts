import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
    selector: 'syntax-list',
    templateUrl: './syntax-list.component.html',
    styleUrls: ['./syntax-list.component.scss']
})
export class SyntaxListComponent implements OnInit {

    @Input()
    language: string;

    @Input()
    list;

    constructor() { }

    ngOnInit() {
    }

}
