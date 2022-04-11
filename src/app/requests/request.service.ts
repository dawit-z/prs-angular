import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root',
})

export class RequestService {

  url: string = 'http://localhost:27091/api/requests/';

  constructor(private http: HttpClient) { }

  list(): Observable<Request[]> {
    return this.http.get<Request[]>(this.url);
  }

  approve(request: Request): Observable<unknown> {
    return this.http.put(`${this.url}approve/${request.id}`, request);
  }

  reject(request: Request): Observable<unknown> {
    return this.http.put(`${this.url}reject/${request.id}`, request);
  }

  get(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.url}${id}`);
  }

  create(request: Request): Observable<Request> {
    return this.http.post<Request>(this.url, request);
  }

  update(request: Request): Observable<Request> {
    return this.http.put<any>(`${this.url}${request.id}`, request);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(this.url + `${id}`);
  }

  review(request: Request): Observable<any> {
    return this.http.put<any>(this.url + `review/${request.id}`, request);
  }

  reviews(id: number): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.url}reviews/${id}`);
  }
}
