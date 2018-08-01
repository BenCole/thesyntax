import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../../../models/language.interface';

@Component({
    selector: 'language-list-component',
    templateUrl: './language-list-component.component.html',
    styleUrls: ['./language-list-component.component.scss']
})
export class LanguageListComponent {

    @Input()
    languages;
}
