import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { MonthViewComponent } from './components/month-view/month-view.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    MonthViewComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }
