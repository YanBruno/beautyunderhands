import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { SharedModule } from '../shared/shared.module';
import { NovoAgendamentoPageComponent } from './pages/novo-agendamento-page/novo-agendamento-page.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CalendarComponent,
    DayViewComponent,
    MonthViewComponent,
    NovoAgendamentoPageComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule
  ]
})
export class AgendaModule { }
