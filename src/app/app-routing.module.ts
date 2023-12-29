import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroComponent } from './componentes/formulario-cadastro/formulario-cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';
import { PaginaPrincipalMedicamentosComponent } from './componentes/medicamentos/pagina-principal-medicamentos/pagina-principal-medicamentos.component';
import { MedicamentosListarComponent } from './componentes/medicamentos/medicamentos-listar/medicamentos-listar.component';
import { MedicamentosEditarComponent } from './componentes/medicamentos/medicamentos-editar/medicamentos-editar.component';
import { CriarInternacoesComponent } from './componentes/internacao/criar-internacoes/criar-internacoes.component';
import { ListarInternacaoComponent } from './componentes/internacao/listar-internacao/listar-internacao.component';

const routes: Routes = [
  {
    path: 'cadastrarUsuario',
    component: FormularioCadastroComponent
  },
  {
    path: 'loginUsuario',
    component: LoginComponent
  },
  {
    path: 'paginaUsuario',
    component: PaginaUsuarioComponent
  },
  {
    path: 'listaPacientes',
    component: ListaPacientesComponent
  },
  {
    path: 'criarMedicamentos',
    component: MedicamentosComponent
  },
  {
    path: 'medicamentos',
    component: PaginaPrincipalMedicamentosComponent
  },
  {
    path: 'listarMedicamentos',
    component: MedicamentosListarComponent
  },
  {
    path: 'editarMedicamento',
    component: MedicamentosEditarComponent
  },
  {
    path: 'criarInternacao',
    component: CriarInternacoesComponent
  },
  {
    path: 'listarInternacao',
    component: ListarInternacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
