import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DayViewComponent } from './components/dashboard/day-view/day-view.component';
import { CalendarComponent } from './components/dashboard/calendar/calendar.component';
import { MonthViewComponent } from './components/dashboard/month-view/month-view.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';
import { SchedulingItemComponent } from './components/dashboard/scheduling-item/scheduling-item.component';
import { AgendamentoDetalhePageComponent } from './pages/agendamento-detalhe-page/agendamento-detalhe-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CalendarComponent,
    DayViewComponent,
    MonthViewComponent,
    NovoAgendamentoPageComponent,
    SchedulingItemComponent,
    AgendamentoDetalhePageComponent,
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule
  ]
})
export class AgendaModule { }
