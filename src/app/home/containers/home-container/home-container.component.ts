import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home-container-component',
  templateUrl: 'home-container.component.html' 
})
export class HomeContainerComponent implements OnInit {
  public message: string;

  constructor(private http: Http) {}

  ngOnInit() {
    this.message = 'Hello';
  }
}
