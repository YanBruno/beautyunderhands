import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardPageComponent,
    CalendarComponent,
    DayViewComponent,
    MonthViewComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    SharedModule
  ]
})
export class AgendaModule { }
