import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/agenda-page/agenda-page.component';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';
import { AgendamentoDetalhePageComponent } from './pages/agendamento-detalhe-page/agendamento-detalhe-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent }
  , { path: 'novo-agendamento', component: NovoAgendamentoPageComponent }
  , { path: ':id', component: AgendamentoDetalhePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
