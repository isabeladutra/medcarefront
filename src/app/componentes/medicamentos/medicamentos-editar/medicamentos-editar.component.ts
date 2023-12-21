import { Component,  Input,  OnInit } from '@angular/core';
import { MedicamentoService } from '../../medicamento.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedicamentoDataService } from '../../medicamentos-data.service';

@Component({
  selector: 'app-medicamentos-editar',
  templateUrl: './medicamentos-editar.component.html',
  styleUrls: ['./medicamentos-editar.component.css']
})
export class MedicamentosEditarComponent implements OnInit{

  @Input() dadosPrescricao: any; // Recebe os dados do componente pai
  nomePaciente: string = '';
  nomeMedicamento: string = '';
  quantidade: number = 0;
  dataPrescricao: string = '';
  formularioeditarmedicamento!: FormGroup;

  constructor(private fb: FormBuilder, private service: MedicamentoService, private medicamentoDataService: MedicamentoDataService) {}

  ngOnInit(): void {
    this.medicamentoDataService.dadosPrescricao$.subscribe((dadosPrescricao) => {
      if (dadosPrescricao) {
        this.nomePaciente = dadosPrescricao.nomePaciente;
        this.nomeMedicamento = dadosPrescricao.nomeMedicamento;
        this.quantidade = dadosPrescricao.quantidade;
        this.dataPrescricao = dadosPrescricao.dataPrescricao;

        // Inicialize o formulário aqui, se necessário
         this.inicializarFormulario();
      }
    });
  }



  inicializarFormulario() {
    this.formularioeditarmedicamento = this.fb.group({
      nomeMedicamentoAntigo: ['', Validators.required],
      novaQuantidade: [''],
      novoNomeMedicamento: [''],
      novaDataPrescricao: [''],
    });
  }
   


  editarPrescricao() {
    
     // Obtendo os valores do formulário
   const novaQuantidade = this.formularioeditarmedicamento.get('novaQuantidade')?.value;
   const novoNomeMedicamento = this.formularioeditarmedicamento.get('novoNomeMedicamento')?.value;
   const novaDataPrescricao = this.formularioeditarmedicamento.get('novaDataPrescricao')?.value;
    
   // Certifique-se de verificar se os valores são undefined e, se necessário, atribuir valores padrão

   // Chame o serviço para editar
   this.service.editar(novaQuantidade, novoNomeMedicamento, novaDataPrescricao, this.nomeMedicamento, this.nomePaciente).subscribe(
    () => {
      // Lógica de sucesso, se necessário
    },
    (error) => {
      alert("Erro ao editar medicamento "+ error);
      
      // Lógica de tratamento de erro
      console.error('Erro ao editar prescrição:', error);
      // Aqui você pode exibir uma mensagem de erro para o usuário ou realizar outra ação adequada
    }
  );

  }

 

}
