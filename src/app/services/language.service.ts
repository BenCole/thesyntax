import { Injectable, Optional, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { of, Observable } from 'rxjs';
import { Language } from '../models/language.interface';
import { HttpClient} from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    origin: string;

    constructor(private httpClient: HttpClient,  @Optional() @Inject(APP_BASE_HREF) origin: string) { 
        this.origin = origin;
    }

    getLanguages(): Observable<any> {
        return this.httpClient.get(`/api/v1.0/language`)
            .pipe(catchError((error: any) => of(error)));
    }
}
