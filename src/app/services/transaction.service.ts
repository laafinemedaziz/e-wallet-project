import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/class/user';
@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'https://6dbe4df5-0ff9-43fe-bf8b-2534b3265323.mock.pstmn.io'; // Remplace par l'URL de ton API

  constructor(private http: HttpClient) {}

  getTransactionsByUser(userId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
