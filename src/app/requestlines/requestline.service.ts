import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  url: string = "http://localhost:27091/api/requests/";

  constructor(private http: HttpClient) { }

  list(): Observable<Requestline[]> {
    return this.http.get<Requestline[]>(this.url);
  }

  get(id: number): Observable<Requestline> {
    return this.http.get<Requestline>(`${this.url}${id}`)
  }

  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post<Requestline>(this.url, requestline);
  }

  update(requestline: Requestline): Observable<Requestline> {
    return this.http.put<any>(`${this.url}${requestline.id}`, requestline);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(this.url + `${id}`);
  }


}

