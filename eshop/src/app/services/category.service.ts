import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'
@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) { }
    public getCategories() {
        return this.http.get(`${environment.apiUrl}/category`).pipe(
            map((result: any) => result.data)
        );
    }
}