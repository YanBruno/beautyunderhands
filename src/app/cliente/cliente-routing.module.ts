import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClienteListaPageComponent } from './pages/cliente-lista-page/cliente-lista-page.component';
import { ClienteNovoPageComponent } from './pages/cliente-novo-page/cliente-novo-page.component';
import { ClienteDetalhePageComponent } from './pages/cliente-detalhe-page/cliente-detalhe-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent, children: [
      { path: '', component: ClienteListaPageComponent },
      { path: 'novo', component: ClienteNovoPageComponent },
      { path: ':id', component: ClienteDetalhePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
