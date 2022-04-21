import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review, UserAuth } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiUrl = 'http://localhost:3000';
  user: UserAuth;
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  createUser(user: UserAuth): Observable<UserAuth> {
    return this.http.post<UserAuth>(
      this.apiUrl + '/users',
      JSON.stringify(user),
      this.httpHeaders
    );
  }

  readAllUsers(): Observable<UserAuth[]> {
    return this.http.get<UserAuth[]>(this.apiUrl + '/users');
  }

  getReview(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl + '/newReviews');
  }

  createReview(article: any) {
    console.log(article);
    // article['id'] = 'uuid';
    return this.http.post<Review>(this.apiUrl + '/newReviews', article);
  }

  deleteReview(id: string): Observable<UserAuth> {
    return this.http.delete<UserAuth>(this.apiUrl + '/newReviews/' + id);
  }
}
