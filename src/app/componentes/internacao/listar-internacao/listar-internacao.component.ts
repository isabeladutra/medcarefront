import { Component, OnInit } from '@angular/core';
import { InternacaoService } from '../../internacoes.service';
import { InternacaoLista } from '../../InternacaoLista';

@Component({
  selector: 'app-listar-internacao',
  templateUrl: './listar-internacao.component.html',
  styleUrls: ['./listar-internacao.component.css']
})
export class ListarInternacaoComponent implements OnInit{
  constructor(private service:InternacaoService){}
  ngOnInit(): void {
    
  }
  nomePaciente: string = '';

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

}
