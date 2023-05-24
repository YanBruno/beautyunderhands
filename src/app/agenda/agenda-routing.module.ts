import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent }
  , { path: 'novo-agendamento', component: NovoAgendamentoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
