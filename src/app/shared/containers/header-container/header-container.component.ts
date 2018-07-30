import { Component } from '@angular/core';
import { UiService } from '../../../services/ui.service';

@Component({
    selector: 'header-container-component',
    styleUrls: ['header-container.component.scss'],
    templateUrl: 'header-container.component.html'
})
export class HeaderContainerComponent {
    menuOpen: boolean;

    toggleMenu() {
        this.uiService.toggleMenu();
    }

    constructor(private uiService: UiService) {
        this.uiService.menuOpen
            .subscribe(status => {
                console.log(status);
                this.menuOpen = status;
            });
    }
}
