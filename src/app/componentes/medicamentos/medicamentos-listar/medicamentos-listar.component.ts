import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { MedicamentoLista } from '../../medicamentolista';
import { MedicamentoService } from '../../medicamento.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicamentosEditarComponent } from '../medicamentos-editar/medicamentos-editar.component';
import { MedicamentoDataService } from '../../medicamentos-data.service';



@Component({
  selector: 'app-medicamentos-listar',
  templateUrl: './medicamentos-listar.component.html',
  styleUrls: ['./medicamentos-listar.component.css']
})
export class MedicamentosListarComponent implements OnInit {
 



  listaMedicamentos: MedicamentoLista = {} as MedicamentoLista;
  nomePaciente: string = '';

  paciente: MedicamentoLista['paciente'] = {} as MedicamentoLista['paciente'];
  listaPrescricao: MedicamentoLista['listaPrescricao'] = [];


  constructor(private service: MedicamentoService, private router: Router, private medicamentoDataService: MedicamentoDataService) { }

  ngOnInit(): void {

  }

  pesquisarPorNome() {
    console.log("Pesquisando por nome: " + this.nomePaciente);
    if (this.nomePaciente.trim() !== '') {
      this.service.listar(this.nomePaciente).subscribe(
        (medicamentoLista: MedicamentoLista) => {
          console.log("lista: ", medicamentoLista);
          this.listaMedicamentos = medicamentoLista;
          this.paciente = medicamentoLista.paciente;
          this.listaPrescricao = medicamentoLista.listaPrescricao;
          // Additional logic if needed
        },
        error => {
          console.error(error);
        }
      );
    } else {
      // Handle the case when the search term is empty
      console.log("Search term is empty");
    }
  }


  excluirPrescricao(index: number) {
    console.log("Excluindo... " + index);

    const medicamentoParaExcluir = this.listaPrescricao[index];

    if (medicamentoParaExcluir) {
      const nomePaciente = this.listaMedicamentos.paciente.nome; // Assuming this is how you get the patient name
      const nomeMedicamento = medicamentoParaExcluir.nomeMedicamento;
      console.log("nome: " + nomePaciente);
      console.log("medicamento: " + nomeMedicamento);

      this.service.excluir(nomePaciente, nomeMedicamento).subscribe(
        () => {
          // Remove the prescription from the local list after successful deletion
          this.listaPrescricao.splice(index, 1);
          console.log('Medicamento excluído com sucesso!');
        },
        (error) => {
          console.error('Erro ao excluir o medicamento:', error);
        }
      );
    } else {
      console.error('Prescription not found at index ' + index);
    }
  }

  editarPrescricao(nomeMedicamento: string, quantidade: number, dataPrescricao: string) {
    console.log('Editando prescrição (listar):', nomeMedicamento, quantidade, dataPrescricao);
    this.medicamentoDataService.atualizarDadosPrescricao({
      nomePaciente: this.paciente.nome,
      nomeMedicamento: nomeMedicamento,
      quantidade: quantidade,
      dataPrescricao: dataPrescricao,
      // Adicione mais dados conforme necessário
    });
    this.router.navigate(['/editarMedicamento']);
  }
  
  
}




