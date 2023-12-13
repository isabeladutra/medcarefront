import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroComponent } from './componentes/formulario-cadastro/formulario-cadastro.component';

const routes: Routes = [
  {
    path: 'cadastrarUsuario',
    component: FormularioCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
