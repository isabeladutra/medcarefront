import { Component, OnInit } from '@angular/core';
import { InternacaoService } from '../../internacoes.service';
import { InternacaoLista } from '../../InternacaoLista';
import { Router } from '@angular/router';
import { EditarInternacaoNomePacienteDataService } from '../../editarInternacaoNomepaciente-data.service';

@Component({
  selector: 'app-listar-internacao',
  templateUrl: './listar-internacao.component.html',
  styleUrls: ['./listar-internacao.component.css']
})
export class ListarInternacaoComponent implements OnInit{
  constructor(private service: InternacaoService, private router: Router, private dataService: EditarInternacaoNomePacienteDataService){}
  ngOnInit(): void {
    
  }
  nomePaciente: string = '';
  data: string= '';

  internacaoLista: InternacaoLista | undefined;

  pesquisarPorNome() {
    console.log("Pesquisando por nome: " + this.nomePaciente);
    if (this.nomePaciente.trim() !== '') {
      this.service.listar(this.nomePaciente).subscribe((data: InternacaoLista) => {
        this.internacaoLista = data;
        console.log('Lista de internações:', this.internacaoLista);
      },
      (error) => {
        console.error('Erro ao obter a lista de internações:', error);
        // Adicione código adicional de manipulação de erro, se necessário
      });
    }
  }

  excluirInternacao(dataEntrada: string) {
    console.log('Excluir internação com data de entrada:', this.formatarDataEntrada(dataEntrada));
     this.data = this.formatarDataEntrada(dataEntrada);
    // Chame o serviço ou a lógica de exclusão aqui
    if (this.nomePaciente.trim() !== '') {
      this.service.excluir(this.data, this.nomePaciente).subscribe( () => {
        console.log('Internação excluída com sucesso.');
        alert('Internação excluída com sucesso!');
        // Adicione lógica adicional após a exclusão bem-sucedida, se necessário
      },
      (error) => {
        console.error('Erro ao excluir internação:', error);
        // Adicione lógica de manipulação de erro adicional, se necessário
      });
    }
  }

  formatarDataEntrada(dataEntrada: string): string {
    // Formatar a data removendo o "T" e substituindo por um espaço
    return dataEntrada.replace('T', ' ');
  }

  editarInternacao(nomePaciente: string){
    this.dataService.setNomePaciente(this.nomePaciente);
    this.router.navigate(['/editarInternacao']);
  }

}
