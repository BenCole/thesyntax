import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'search-input',
    styleUrls: ['search-input.component.scss'],
    templateUrl: 'search-input.component.html'
})
export class SearchInputComponent {

    @Output()
    typingStarted: EventEmitter<any> = new EventEmitter;

    startedTyping() {
        this.typingStarted.emit(true);
    }
}
