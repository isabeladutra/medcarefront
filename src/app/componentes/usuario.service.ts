import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { login } from './login';
import { LoginResponse } from './loginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/medicos';
  private readonly LOGAR = 'http://localhost:8080/authenticate'

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario) {
    return this.http.post(this.API, usuario,  { responseType : 'text'});
  }

  logar(login: login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGAR, login);
  }

  
}
