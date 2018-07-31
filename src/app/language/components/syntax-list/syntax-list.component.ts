import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'syntax-list',
    templateUrl: './syntax-list.component.html',
    styleUrls: ['./syntax-list.component.scss']
})
export class SyntaxListComponent implements OnInit {

    @Input()
    filterString: string;

    @Input()
    language: string;

    @Input()
    list;

    constructor() { }

    ngOnInit() {
    }

}
