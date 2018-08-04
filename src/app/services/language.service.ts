import { Injectable, Optional, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { of, Observable, throwError } from 'rxjs';
import { Language } from '../models/language.interface';
import { HttpClient} from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    origin: string;

    constructor(
        private httpClient: HttpClient,
        @Optional() @Inject(APP_BASE_HREF) origin: string) { 
        this.origin = origin;
    }

    getLang() {
       return this.httpClient.get(`/api/v1.0/language`)
        .pipe(
            map((res: Response) => res['data']),
            catchError((error: any) => throwError(error))
        );
    }
}