import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PrestadorDetalhePageComponent } from './pages/prestador-detalhe-page/prestador-detalhe-page.component';
import { PretadorListaPageComponent } from './pages/pretador-lista-page/pretador-lista-page.component';
import { PresatdorNovoPageComponent } from './pages/presatdor-novo-page/presatdor-novo-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent, children: [
      { path: '', component: PretadorListaPageComponent }
      , { path: 'novo', component: PresatdorNovoPageComponent }
      , { path: ':id', component: PrestadorDetalhePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadorRoutingModule { }
