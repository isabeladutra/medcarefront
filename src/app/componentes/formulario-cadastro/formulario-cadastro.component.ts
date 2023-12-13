import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private service: UsuarioService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cpf: [null, [Validators.required, Validators.pattern('[0-9]')]],
      idade: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern('[0-9]')]],
      crm: ['', Validators.required],
      especialidade: ['', Validators.required],
    });

    
  }

  cadastrarUsuario() {
    
      console.log(this.formulario.value);
      this.service.cadastrar(this.formulario.value).subscribe((response: any) => {
        // Verifica se a resposta contém a mensagem de sucesso
        if (response && response.includes("Médico criado com sucesso")) {
          alert("Médico criado com sucesso");
         
          // Lógica adicional se necessário
        } else {
          alert("Falha ao criar o médico");
          
          // Lógica adicional se necessário
        }
      },
      (error) => {
        console.error("Erro ao cadastrar o médico", error);
        alert("Erro ao cadastrar o médico");
        // Lógica adicional se necessário
      });
    
  }
}
