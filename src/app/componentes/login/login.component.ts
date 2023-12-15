// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../loginResponse';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulariologin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UsuarioService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulariologin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  logar() {
    this.service.logar(this.formulariologin.value).subscribe(
      (resposta: LoginResponse) => {
        console.log('Resposta do login:', resposta);

        if (resposta && resposta.accessToken) {
          // Armazene o token usando o serviço AuthService
          this.authService.setAccessToken(resposta.accessToken);

          // Redirecione para a página do usuário
          this.router.navigate(['/paginaUsuario']);
        } else {
          console.error('A resposta não contém accessToken.');
        }
      },
      (erro) => {
        console.error('Erro no login:', erro);
      }
    );
  }
}
