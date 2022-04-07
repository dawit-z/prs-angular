import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  url: string = "http://localhost:27091/api/users/";

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`)
  }
}
