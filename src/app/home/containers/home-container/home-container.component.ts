import {Component, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home-container.component.html' 
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private http: Http) {}

  ngOnInit() {
    this.message = 'Hello';
    this.http.get('/api/ok')
      .pipe(map((res: Response) => res.json()))
      .subscribe(data => {
        console.log(data);
      });
  }
}
