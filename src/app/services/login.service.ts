import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://freeapi.miniprojectideas.com/api/BigBasket/Login';

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer l'email et le mot de passe au backend
  login(email: string, password: string): Observable<any> {
    const userData = { email, password }; // Données à envoyer
    return this.http.post(this.apiUrl, userData); // Envoi des données avec POST
  }
}
