import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DayViewComponent } from './components/dashboard/day-view/day-view.component';
import { MonthViewComponent } from './components/dashboard/month-view/month-view.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';
import { SchedulingItemCardComponent } from './components/dashboard/scheduling-item-card/scheduling-item-card.component';
import { AgendamentoDetalhePageComponent } from './pages/agendamento-detalhe-page/agendamento-detalhe-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardPageComponent,
    DayViewComponent,
    MonthViewComponent,
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
})
export class AgendaModule { }
