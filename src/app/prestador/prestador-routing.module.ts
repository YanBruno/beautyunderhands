import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PrestadorDetalhePageComponent } from './pages/prestador-detalhe-page/prestador-detalhe-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent }
  , { path: ':id', component: PrestadorDetalhePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadorRoutingModule { }
