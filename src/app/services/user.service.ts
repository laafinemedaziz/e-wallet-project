import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/class/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://253acfc8-8fc1-4e9f-b648-5b3640a66a01.mock.pstmn.io';

  constructor(private http: HttpClient) {}

  getUserById(id: 1): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}/${id}`);
  }
}
