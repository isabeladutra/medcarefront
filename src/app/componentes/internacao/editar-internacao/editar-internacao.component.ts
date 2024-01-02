import { Component, OnInit } from '@angular/core';
import { EditarInternacaoNomePacienteDataService } from '../../editarInternacaoNomepaciente-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editar-internacao',
  templateUrl: './editar-internacao.component.html',
  styleUrls: ['./editar-internacao.component.css']
})
export class EditarInternacaoComponent implements OnInit {
  nomePaciente: string = '';
  formularioeditarinternacao!: FormGroup;
  constructor(private dataService: EditarInternacaoNomePacienteDataService, private fb: FormBuilder){

  }
  ngOnInit(): void {
    
    this.dataService.nomePacienteAtual.subscribe((nome) => {
      this.nomePaciente = nome;
    });

    this.formularioeditarinternacao = this.fb.group({
      motivoInternacao: ['', Validators.required],
      nomeHospital: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: [''],  // Adicione se necessário, dependendo se este campo é obrigatório ou não
    });
  }

}
