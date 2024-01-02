// paciente-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditarInternacaoNomePacienteDataService {
  private nomePacienteSource = new BehaviorSubject<string>('');
  nomePacienteAtual = this.nomePacienteSource.asObservable();

  constructor() {}

  setNomePaciente(nome: string) {
    this.nomePacienteSource.next(nome);
  }
}
