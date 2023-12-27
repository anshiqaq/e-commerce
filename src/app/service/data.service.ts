import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private BASE_URL = 'https://api.escuelajs.co/api/v1'
  private BASE_URL = 'http://localhost:5131/api'
  
  constructor(private http : HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.BASE_URL}/category`)
  }

  getProduct(): Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/product`)
  }
  
  getProductById(id : number) : Observable<IProduct>{
    return this.http.get<IProduct>(`${this.BASE_URL}/product/${id}`)
  }

  getProductByCatId(id : number) : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.BASE_URL}/product/category/${id}`)
  }
  
}
