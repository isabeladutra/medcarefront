import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroComponent } from './componentes/formulario-cadastro/formulario-cadastro.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaUsuarioComponent } from './componentes/pagina-usuario/pagina-usuario.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
