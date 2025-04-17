import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatepasswordService {
  private apiUrl = 'http://localhost:3002/users'; // Remplacez par l'URL de votre API backend

  constructor(private http: HttpClient) {}

  // Méthode pour mettre à jour le mot de passe
  updatePassword(newPassword: string): Observable<any> {
    // Envoi d'une requête POST avec le nouveau mot de passe
    return this.http.post(this.apiUrl, { newPassword });
  }
}
