import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Importe o operador 'of'
import { catchError } from 'rxjs/operators'; // Importe o operador 'catchError'
import { Medicamento } from './medicamento';
import { AuthService } from './authentication.service';
import { MedicamentoLista } from './medicamentolista';
import { throwError } from 'rxjs';
import { EditarParams } from './EditarParams';


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

 private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Deixe o aplicativo continuar executando, retornando um resultado vazio.
      return of(result as T);
    };
  }



    listar(nomePaciente: string): Observable<MedicamentoLista> {
        console.log("nOME: "+ nomePaciente);
        if (!this.token) {
            console.error('Token de acesso não disponível.');
        
            return of(); 
           }
        const params = { nomePaciente: nomePaciente }; 
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.token.toString() );
        console.log("token: " + this.token.toString());
        
        return this.http.get<MedicamentoLista>(`${this.apiUrl}/listar`, { params: params, headers: headers })
        .pipe(
            catchError(this.handleError<MedicamentoLista>('listar', {} as MedicamentoLista))
        );
    }
    
    excluir(nomePaciente: string, nomeMedicamento: string): Observable<any> {
        if (!this.token) {
          console.error('Token de acesso não disponível.');
          return of();
        }
      
        const params = {
          nomePaciente: nomePaciente,
          nomeMedicamento: nomeMedicamento
        };
      
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.token.toString());
        console.log("token: " + this.token.toString());
        let errorMessage = "";
      
        return this.http.delete(`${this.apiUrl}/remover`, { params: params, headers: headers })
          .pipe(
            catchError((error: any) => {
                if (error.status === 404) {
                    errorMessage = 'Paciente não encontrado no sistema';
                  } else if (error.status === 400) {
                    errorMessage = 'Requisição inválida';
                  } else if (error.status === 500) {
                    errorMessage = 'Erro durante a exclusão do medicamento';
                  } 
                  return throwError(errorMessage);
                } )
          );
      }

      editar(
        novaQuantidade: number | undefined,
        novoNomeMedicamento: string | undefined,
        novaDataPrescricao: string | undefined,
        nomeMedicamentoAntigo: string, 
        nomePaciente: string
      ): Observable<any> {
        if (!this.token) {
          console.error('Token de acesso não disponível.');
          return throwError('Token de acesso não disponível.');
        }
      
        let errorMessage = "";
        const params: any = {
          nomeMedicamentoAntigo: nomeMedicamentoAntigo,
          nomePaciente: nomePaciente,
        };
      
        if (novaQuantidade !== undefined) {
          params.novaQuantidade = novaQuantidade;
        }
      
        if (novoNomeMedicamento !== undefined) {
          params.novoNomeMedicamento = novoNomeMedicamento;
        }
      
        if (novaDataPrescricao !== undefined) {
          params.novaDataPrescricao = novaDataPrescricao;
        }
      
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer ' + this.token.toString());
      
        // Especifique que você espera uma resposta de texto
        headers = headers.set('Content-Type', 'text/plain');
      
        return this.http.put(`${this.apiUrl}/atualizar`, null, { 
          params: params, 
          headers: headers
        })
          .pipe(
            catchError((error: any) => {
              if (error.status === 404) {
                errorMessage = 'Paciente não encontrado no sistema';
              } else if (error.status === 400) {
                errorMessage = 'Requisição inválida '+ error.error.message;
              } else if (error.status === 500) {
                errorMessage = 'Erro durante a atualização do medicamento';
              } 
              console.log(error.error);
              console.log(error.error.message);
              return throwError(errorMessage);
            })
          );
      }
      
      
  

}
