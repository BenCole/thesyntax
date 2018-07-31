import { Component } from '@angular/core';
import { UiService } from '../../../services/ui.service';

@Component({
    selector: 'header-container-component',
    styleUrls: ['header-container.component.scss'],
    templateUrl: 'header-container.component.html'
})
export class HeaderContainerComponent {

    menuOpen: boolean;
    searchOpen: boolean;
    ok: string;

    toggleMenu() {
        this.uiService.toggleMenu();
    }

    toggleSearch(searchString) {
        this.uiService.toggleSearch(searchString);
    }

    constructor(private uiService: UiService) {
        this.uiService.menuOpen
            .subscribe(status => {
                this.menuOpen = status;
            });

        this.uiService.searchOpen
            .subscribe(status => this.searchOpen = status);
    }
}
