import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private menuOpenSource: BehaviorSubject<boolean>;
  public menuOpen: Observable<any>;

  private searchOpenSource: BehaviorSubject<boolean>;
  public searchOpen: Observable<any>;

  private searchStringSource: BehaviorSubject<boolean>;
  public searchString: Observable<any>;

  constructor() { 
    this.menuOpenSource = new BehaviorSubject<boolean>(false);
    this.menuOpen = this.menuOpenSource.asObservable();

    this.searchOpenSource = new BehaviorSubject<boolean>(false);
    this.searchOpen = this.searchOpenSource.asObservable();

    this.searchStringSource = new BehaviorSubject<boolean>(false);
    this.searchString = this.searchStringSource.asObservable();
  }

  toggleMenu() {
    this.menuOpenSource.next(!this.menuOpenSource.value);
    this.searchOpenSource.next(false);
  }

  toggleSearch(searchString) {
    const status = searchString.length ? true : false; 
    this.searchOpenSource.next(status);
    this.searchStringSource.next(searchString);
    this.menuOpenSource.next(false);
  }

  hideMenu() {
    this.menuOpenSource.next(false);
  }
}
