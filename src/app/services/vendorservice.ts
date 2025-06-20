import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../model/vendormodel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VendorService {
  private baseUrl = 'http://localhost:8080/api/Vendors';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.baseUrl);
  }

  getById(id: number): Observable<Vendor> {
    return this.http.get<Vendor>(`${this.baseUrl}/${id}`);
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.baseUrl, vendor);
  }

  update(vendor: Vendor): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${vendor.id}`, vendor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
