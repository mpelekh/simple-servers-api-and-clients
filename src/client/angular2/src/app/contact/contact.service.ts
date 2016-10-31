import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
    private apiUrl = 'http://localhost:8000/api/contacts';

    constructor(private http: Http) { }

    getContacts(): Observable<any[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}