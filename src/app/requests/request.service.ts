import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  url: string = "http://localhost:27091/api/requests/";

  constructor(private http: HttpClient) { }

  list(): Observable<Request[]> {
    return this.http.get<Request[]>(this.url);
  }

  get(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.url}${id}`)
  }
}
