import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicamentoService } from '../medicamento.service';
import { Prescricao } from '../medicamento';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private service: MedicamentoService) {}
  ngOnInit(): void {
    this.inicializarFormulario();
    this.prescricoes = []; 
    
  }

  formulariomedicamento!: FormGroup;
  prescricoes: Prescricao[] = [];

  inicializarFormulario(): void {
    this.formulariomedicamento = this.formBuilder.group({
      nome: ['', Validators.required],
      prescricao: this.formBuilder.group({
        nomeMedicamento: ['', Validators.required],
        quantidade: [null, [Validators.required, Validators.min(1)]],
        dataPrescricao: ['', Validators.required],
      })
    });
  }

  cadastrarMedicamento() {
    const prescricao = this.formulariomedicamento.value.prescricao;
    this.prescricoes.push(prescricao); 
    const formularioValues = this.formulariomedicamento.value;

   // Cria a estrutura esperada pelo backend
    const medicamento = {
    nome: formularioValues.nome,
    prescricoes: [formularioValues.prescricao]
    };
     console.log(medicamento);
   // Chama o serviço para cadastrar o medicamento
   this.service.cadastrar(medicamento).subscribe((response: any) => {
    // Verifica se a resposta contém a mensagem de sucesso
    if (response && response.includes("Medicamentos salvos com sucesso.")) {
      alert("Medicamentos salvos com sucesso.");
     
      // Lógica adicional se necessário
    } else {
      alert("Falha ao criar o medicamento");
      
      // Lógica adicional se necessário
    }
  },
  (error) => {
    console.error("Erro ao cadastrar o medicamento", error);
    alert("Erro ao cadastrar o medicamento");
    // Lógica adicional se necessário
  });
    
  }
}
