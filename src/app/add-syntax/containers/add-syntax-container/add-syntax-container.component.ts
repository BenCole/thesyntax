import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add-syntax-container',
    templateUrl: './add-syntax-container.component.html',
    styleUrls: ['./add-syntax-container.component.scss']
})
export class AddSyntaxContainerComponent implements OnInit {

    text: string = 'here is the code';

    constructor() { }

    ngOnInit() {
    }

}
