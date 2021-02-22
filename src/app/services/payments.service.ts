import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../interfaces/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  url: string = 'http://localhost:3000/paymentMethods';

  constructor(private http: HttpClient) { }

  listAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.url);
  }

  listOne(id: number): Observable<Payment> {
    return this.http.get<Payment>(this.url + '/' + id);
  }
}
