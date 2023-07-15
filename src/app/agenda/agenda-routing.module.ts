import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';
import { AgendamentoDetalhePageComponent } from './pages/agendamento-detalhe-page/agendamento-detalhe-page.component';
import { AgendaPageComponent } from './pages/agenda-page/agenda-page.component';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent, children: [
      { path: '', component: AgendaPageComponent }
      , { path: 'novo-agendamento', canMatch: [AdminGuard], component: NovoAgendamentoPageComponent }
      , { path: ':id', component: AgendamentoDetalhePageComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }



