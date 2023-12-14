import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit{
  listapacientes: Paciente[] = [];
  constructor(private service: PacienteService) {}

  ngOnInit(): void {
    this.carregarListaPacientes();
    
  }

  private carregarListaPacientes() {
    this.service.listaPacientes().subscribe((listapacientes) => {this.listapacientes = listapacientes}
    );
  }

}
