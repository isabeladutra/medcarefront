import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Importe o operador 'of'
import { catchError } from 'rxjs/operators'; // Importe o operador 'catchError'
import { Medicamento } from './medicamento';
import { AuthService } from './authentication.service';

@Injectable({
 providedIn: 'root',
})
export class MedicamentoService {
 private apiUrl = 'http://localhost:8080/medicamentos';
 private token: string | null;

 constructor(private http: HttpClient, private authService: AuthService) {
     // Obtenha o token no construtor ou em um método específico
     this.token = this.authService.getAccessToken();
 }


 
 
  

 cadastrar(medicamento: Medicamento) {


 
  if (!this.token) {
   console.error('Token de acesso não disponível.');
    // Retorne um Observable vazio ou com um valor padrão
   return of(); // Use 'of()' para criar um Observable vazio
  }
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'Bearer ' + this.token.toString() );
  console.log("token: " + this.token.toString());
  return  this.http.post(`${this.apiUrl}/salvar`, medicamento, { headers: headers });
 }

}
