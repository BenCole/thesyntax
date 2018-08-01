import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Language } from '../models/language.interface';
import { Http, Response } from '@angular/http';
import { map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private http: Http) { }

    getLanguages(): Observable<Language[]> {
        return this.http.get('/api/v1.0/language')
            .pipe(map((responce: Response) => responce.json()))
            .pipe(catchError((error: any) => of(error)));
    }
}
