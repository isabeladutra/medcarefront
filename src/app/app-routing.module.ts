import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroComponent } from './componentes/formulario-cadastro/formulario-cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';

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
    path: 'medicamentos',
    component: MedicamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
