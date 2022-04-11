import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root',
})

export class VendorService {

  url: string = 'http://localhost:27091/api/vendors/';

  constructor(private http: HttpClient) { }

  list(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.url);
  }

  get(id: number): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.url}${id}`);
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.url, vendor);
  }

  update(vendor: Vendor): Observable<Vendor> {
    return this.http.put<any>(`${this.url}${vendor.id}`, vendor);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(this.url + `${id}`);
  }
}
