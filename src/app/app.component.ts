import {Component, HostListener} from '@angular/core';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  constructor(private uiService: UiService) {}

  @HostListener('window:resize', ['$event'])
  // hide mobile menu if going from a small to large viewport
  onResize(event) {
    if (event.target.innerWidth > 767 && this.uiService.menuOpen) {
      this.uiService.hideMenu();
    }
  }
}
