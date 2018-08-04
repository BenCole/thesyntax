import { Component, Input } from '@angular/core';

@Component({
    selector: 'language-list-component',
    templateUrl: './language-list-component.component.html',
    styleUrls: ['./language-list-component.component.scss']
})
export class LanguageListComponent {
    @Input()
    items: any;
}
