// medicamento-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoDataService {
  private dadosPrescricaoSource = new BehaviorSubject<any>(null);
  dadosPrescricao$ = this.dadosPrescricaoSource.asObservable();

  atualizarDadosPrescricao(dadosPrescricao: any) {
    this.dadosPrescricaoSource.next(dadosPrescricao);
  }
}
