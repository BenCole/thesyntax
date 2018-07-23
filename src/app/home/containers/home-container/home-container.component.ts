import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
    selector: 'home-container-component',
    templateUrl: 'home-container.component.html'
})
export class HomeContainerComponent implements OnInit {
    public message: string;

    languageList = [
        {
            name: 'javascript',
            icon: 'devicon-javascript-plain'

        },
        {
            name: 'typescript',
            icon: 'devicon-typescript-plain'
        },
        {
            name: 'angular',
            icon: 'devicon-angularjs-plain'

        },
        {
            name: 'sass',
            icon: 'devicon-sass-original'
        },
        {
            name: 'angular js',
            icon: 'devicon-angularjs-plain-wordmark'
        },
        {
            name: 'css',
            icon: 'devicon-css3-plain'
        }
    ];


    constructor(private http: Http) { }

    ngOnInit() {
        this.message = 'Hello';
    }
}
