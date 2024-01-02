import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternacaoService } from '../../internacoes.service';

@Component({
  selector: 'app-criar-internacoes',
  templateUrl: './criar-internacoes.component.html',
  styleUrls: ['./criar-internacoes.component.css']
})
export class CriarInternacoesComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: InternacaoService) {}

  ngOnInit(): void {
    // Inicialize o formulário aqui
    this.formulario = this.formBuilder.group({
      pacienteNome: ['', Validators.required],
      motivoInternacao: ['', Validators.required],
      nomeHospital: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      dataSaida: ['', Validators.required],
    });
  }

  cadastrar(): void {
    this.service.cadastrar(this.formulario.value).subscribe(
      (data) => {
        console.log('Operação bem-sucedida:', data);
        // Adicione lógica adicional aqui, se necessário
      },
      (error) => {
        console.error('Erro durante a operação:', error);
        // Adicione lógica adicional para lidar com o erro, se necessário
      }
    
    );
    
   
    
  }
}
