import { Injectable, Optional, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SyntaxService {

    origin: string;
    API_URL: string;

    constructor(private httpClient: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) { 
       this.origin = origin; 
       this.API_URL = environment.API_URL;
    }

    index(lang): Observable<any> {
        return this.httpClient.get(`${this.API_URL}/api/v1.0/syntax/${lang}`)
            .pipe(catchError((error: any) => throwError(error)));
    }

    getOne(lang, name): Observable<any> {
        return this.httpClient.get(`${this.API_URL}/api/v1.0/language/${lang}/${name}`)
            .pipe(catchError((error: any) => throwError(error)));
    }

    search(qu): Observable<any> {
            return this.httpClient.get(`${this.API_URL}/api/v1.0/search?q=${qu}`)
                .pipe(catchError((error: any) => throwError(error)));
    }

    create(data): Observable<any> {                          // some weird bug https://github.com/angular/angular/issues/18396
        return this.httpClient.post(`${this.API_URL}/api/v1.0/add`, data, {responseType: 'text'})
            .pipe(catchError((error: any) => throwError(error)));
    }
}
