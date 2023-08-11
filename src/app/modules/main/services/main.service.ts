import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Expression } from '../models/expression.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url: string = `${environment.apiUrl + '/calculator'}`

  constructor(private http: HttpClient) { }

  save(data: Expression, type: string): Observable<Expression[]> {
    const endpoint =this.url + '/' + type;

    return this.http.post<Expression[]>(endpoint, data);
  }

  getAll(type: string): Observable<Expression[]> {
    return this.http.get<Expression[]>( this.url + '/' + type);
  }

  edit(data: any, type: string): Observable<Expression[]> {
    return this.http.put<Expression[]>( this.url + '/' + type + '/' + data._id, data);
  }

  delete(id: string, type: string): Observable<Expression[]> {
    return this.http.delete<Expression[]>( this.url + '/' + type + '/' + id);
  }

}