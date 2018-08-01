import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SyntaxService {

    constructor(private http: Http) { }

    index(lang): Observable<any> {
        return this.http.get(`/api/v1.0/syntax/${lang}`)
            .pipe(map((responce: Response) => responce.json()))
            .pipe(catchError((error: any) => of(error)));
    }

    getOne(lang, name): Observable<any> {
        return this.http.get(`/api/v1.0/language/${lang}/${name}`)
            .pipe(map((responce: Response) => responce.json()))
            .pipe(catchError((error: any) => of(error)));
    }

    search(qu): Observable<any> {
        return this.http.get(`/api/v1.0/search?q=${qu}`)
            .pipe(map((responce: Response) => responce.json()))
            .pipe(catchError((error: any) => of(error)));
    }

    create(data): Observable<any> {
        return this.http.post(`/api/v1.0/add`, data)
            .pipe(map((responce: Response) => responce.json()))
            .pipe(catchError((error: any) => of(error)));
    }
}
