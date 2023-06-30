import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/agenda-page/agenda-page.component';
import { DayViewComponent } from './components/dashboard/dashboard-profissionais/dashboard-profissionais.component';
import { DashboardAgendaComponent } from './components/dashboard/dashboard-agenda/dashboard-agenda.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';
import { SchedulingItemCardComponent } from './components/dashboard/scheduling-item-card/scheduling-item-card.component';
import { AgendamentoDetalhePageComponent } from './pages/agendamento-detalhe-page/agendamento-detalhe-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendaService } from './services/agenda.service';


@NgModule({
  declarations: [
    DashboardPageComponent,
    DayViewComponent,
    DashboardAgendaComponent,
    NovoAgendamentoPageComponent,
    SchedulingItemCardComponent,
    AgendamentoDetalhePageComponent,
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AgendaService]
})
export class AgendaModule { }
