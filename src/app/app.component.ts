import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { UiService } from './services/ui.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    constructor(
        private uiService: UiService, 
        private router: Router) {

        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.router.routerState.root)
            )
            .subscribe((event) => {
                // hide menu when switching pages
                if (this.uiService.menuOpen) {
                    this.uiService.hideMenu();
                }
            });
    }

    @HostListener('window:resize', ['$event'])
    // hide mobile menu if going from a small to large viewport
    onResize(event) {
        if (event.target.innerWidth > 767 && this.uiService.menuOpen) {
            this.uiService.hideMenu();
        }
    }
}
