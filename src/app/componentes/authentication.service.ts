// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessTokenSubject = new BehaviorSubject<string | null>(null);

  // Observable para acessar o token de outras partes do aplicativo
  accessToken$ = this.accessTokenSubject.asObservable();

  setAccessToken(token: string): void {
    console.log("Token armazenado: ", token);
    this.accessTokenSubject.next(token);
  }

  getAccessToken(): string | null {
    return this.accessTokenSubject.value;
  }
}
