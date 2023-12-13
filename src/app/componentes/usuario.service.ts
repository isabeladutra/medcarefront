import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/medicos';

  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario) {
    return this.http.post(this.API, usuario,  { responseType : 'text'});
  }
}
