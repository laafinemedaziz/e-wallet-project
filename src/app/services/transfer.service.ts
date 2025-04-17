import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private apiUrl = 'https://dc8bc391-d68e-4408-a17b-0617ef011194.mock.pstmn.io'; // remplace avec ton vrai endpoint

  constructor(private http: HttpClient) {}

  sendCoins(data: {
    recipientId: string;
    amount: number;
    description?: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  // Récupération des derniers transferts
  getLastTransfers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transfer/latest`);
  }
}
