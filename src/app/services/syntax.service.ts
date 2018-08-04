import { Injectable, Optional, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SyntaxService {

    origin: string;

    constructor(private httpClient: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) { 
       this.origin = origin; 
    }

    index(lang): Observable<any> {
        return this.httpClient.get(`/api/v1.0/syntax/${lang}`)
            .pipe(catchError((error: any) => of(error)));
    }

    getOne(lang, name): Observable<any> {
        return this.httpClient.get(`/api/v1.0/language/${lang}/${name}`)
            .pipe(catchError((error: any) => of(error)));
    }

    search(qu): Observable<any> {
            return this.httpClient.get(`/api/v1.0/search?q=${qu}`)
                .pipe(catchError((error: any) => of(error)));
    }

    create(data): Observable<any> {
        return this.httpClient.post(`/api/v1.0/add`, data)
            .pipe(catchError((error: any) => of(error)));
    }
}
