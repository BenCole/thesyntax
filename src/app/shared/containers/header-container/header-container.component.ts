import { Component } from '@angular/core';

@Component({
    selector: 'header-container-component',
    styleUrls: ['header-container.component.scss'],
    templateUrl: 'header-container.component.html'
})
export class HeaderContainerComponent {
    menuOpen: boolean;

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    constructor() {
        this.menuOpen = false;
    }
}
