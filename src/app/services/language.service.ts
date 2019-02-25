import { Injectable, Optional, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { of, Observable, throwError } from 'rxjs';
import { Language } from '../models/language.interface';
import { HttpClient} from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    origin: string;
    API_URL: string;

    constructor(
        private httpClient: HttpClient,
        @Optional() @Inject(APP_BASE_HREF) origin: string) { 

        this.origin = origin;
        this.API_URL = environment.API_URL;
    }

    getLang() {
       return this.httpClient.get(`${this.API_URL}/api/v1.0/language`)
        .pipe(
            map((res: Response) => res['data']),
            catchError((error: any) => throwError(error))
        );
    }
}