import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'menu-toggle',
    styleUrls: ['menu-toggle.component.scss'],
    templateUrl: 'menu-toggle.component.html'
})
export class MenuToggleComponent {

    constructor() {
        this.menuOpen = true;
    }

    @Input()
    menuOpen: boolean;

    @Output()
    menuToggled: EventEmitter<any> = new EventEmitter;

    toggleMenu() {
        this.menuToggled.emit();
    }
}
