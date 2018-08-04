import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';


@Component({
    selector: 'view-code',
    templateUrl: './view-code.component.html',
    styleUrls: ['./view-code.component.scss']
})
export class ViewCodeComponent implements OnInit {

    @Input()
    content: string;

    constructor() {
    }

    ngOnInit() {
    }

}
