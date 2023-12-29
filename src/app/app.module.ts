import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { FormularioCadastroComponent } from './componentes/formulario-cadastro/formulario-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';
import { MedicamentosListarComponent } from './componentes/medicamentos/medicamentos-listar/medicamentos-listar.component';
import { PaginaPrincipalMedicamentosComponent } from './componentes/medicamentos/pagina-principal-medicamentos/pagina-principal-medicamentos.component';
import { MedicamentosEditarComponent } from './componentes/medicamentos/medicamentos-editar/medicamentos-editar.component';
import { CriarInternacoesComponent } from './componentes/internacao/criar-internacoes/criar-internacoes.component';
import { ListarInternacaoComponent } from './componentes/internacao/listar-internacao/listar-internacao.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    FormularioCadastroComponent,
    LoginComponent,
    PaginaUsuarioComponent,
    ListaPacientesComponent,
    MedicamentosComponent,
    MedicamentosListarComponent,
    PaginaPrincipalMedicamentosComponent,
    MedicamentosEditarComponent,
    CriarInternacoesComponent,
    ListarInternacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
