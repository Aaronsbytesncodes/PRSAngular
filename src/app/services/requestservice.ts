import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../model/requestmodel';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private baseUrl = 'http://localhost:8080/api/Requests';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Request[]> {
    return this.http.get<Request[]>(this.baseUrl);
  }

  getById(id: number): Observable<Request> {
    return this.http.get<Request>(`${this.baseUrl}/${id}`);
  }

  create(request: Request): Observable<Request> {
    return this.http.post<Request>(this.baseUrl, request);
  }

  update(request: Request): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${request.id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  submitForReview(id: number): Observable<Request> {
    return this.http.put<Request>(`${this.baseUrl}/submit-review/${id}`, {});
  }

  approve(id: number): Observable<Request> {
    return this.http.put<Request>(`${this.baseUrl}/approve/${id}`, {});
  }

  reject(id: number, reason: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/reject/${id}`, { reason });
  }

  getReviewable(userId: number): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.baseUrl}/list-review/${userId}`);
  }
}
