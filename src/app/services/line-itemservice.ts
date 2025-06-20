import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineItem } from '../model/line-itemmodel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LineItemService {
  private baseUrl = 'http://localhost:8080/api/LineItems';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<LineItem> {
    return this.http.get<LineItem>(`${this.baseUrl}/${id}`);
  }

  getForRequest(requestId: number): Observable<LineItem[]> {
    return this.http.get<LineItem[]>(`${this.baseUrl}/lines-for-req/${requestId}`);
  }

  create(item: LineItem): Observable<LineItem> {
    return this.http.post<LineItem>(this.baseUrl, item);
  }

  update(item: LineItem): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${item.id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
