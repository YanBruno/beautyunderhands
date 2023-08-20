import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { PretadorListaPageComponent } from './pages/pretador-lista-page/pretador-lista-page.component';
import { PrestadorNovoPageComponent } from './pages/prestador-novo-page/prestador-novo-page.component';
import { PrestadorDetalhePageComponent } from './pages/prestador-detalhe-page/prestador-detalhe-page.component';
import { PrestadorDetalheFormComponent } from './components/prestador-detalhe-form/prestador-detalhe-form.component';
import { ContratoDetalheFormComponent } from './components/contrato-detalhe-form/contrato-detalhe-form.component';
import { ComissaoDetalheFormComponent } from './components/comissao-detalhe-form/comissao-detalhe-form.component';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent, children: [
      { path: '', component: PretadorListaPageComponent }
      , { path: 'novo', component: PrestadorNovoPageComponent }
      , {
        path: ':id', component: PrestadorDetalhePageComponent, children: [
          { path: '', component: PrestadorDetalheFormComponent }
          , { path: 'contrato', component: ContratoDetalheFormComponent }
          , { path: 'contrato/comissao', component: ComissaoDetalheFormComponent }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadorRoutingModule { }
