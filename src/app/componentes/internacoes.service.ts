import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs'; // Importe o operador 'of'
import { AuthService } from './authentication.service';
import { Internacao } from './internacao';
import { InternacaoLista } from './InternacaoLista';


@Injectable({
    providedIn: 'root',
   })
   export class InternacaoService {
    private apiUrl = 'http://localhost:8080/internacao';
    private token: string | null;
   
    constructor(private http: HttpClient, private authService: AuthService) {
        // Obtenha o token no construtor ou em um método específico
        this.token = this.authService.getAccessToken();
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // Ocorreu um erro do lado do cliente ou de rede.
          console.error('Erro:', error.error.message);
        } else {
          // O backend retornou um código de status de erro.
          console.error(`Código de status ${error.status}, ` + `Erro: ${error.error}`);
        }
    
        // Retorna um observable com uma mensagem amigável para o usuário.
        return throwError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
      }
    

    cadastrar(internacao: Internacao){
        if (!this.token) {
            console.error('Token de acesso não disponível.');
             // Retorne um Observable vazio ou com um valor padrão
            return of(); // Use 'of()' para criar um Observable vazio
           }
           let headers = new HttpHeaders();
           headers = headers.set('Authorization', 'Bearer ' + this.token.toString() );
           console.log("token: " + this.token.toString());
           return  this.http.post(`${this.apiUrl}/adicionar`, internacao, { headers: headers });

    }

    listar(nomePaciente: string): Observable<InternacaoLista>{
        if (!this.token) {
            console.error('Token de acesso não disponível.');
        
            return of(); 
           }
       
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.token.toString() );
        console.log("token: " + this.token.toString());
        return this.http.get<InternacaoLista>(`${this.apiUrl}/paciente/${encodeURIComponent(nomePaciente)}`, { headers }).pipe(
          catchError(this.handleError)
        );
    }
}