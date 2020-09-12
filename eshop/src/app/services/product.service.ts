import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'
@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }
    public getProducts() {
        return this.http.get(`${environment.apiUrl}/product`).pipe(
            map((result: any) => result.data)
        );
    }

    public getProductByCategory(idCategory) {
    return this.http.get(`${environment.apiUrl}/product/getByCategory`, {params: {idCategory: idCategory}}).pipe(
            map((result: any) => result.data))
    }
}