import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadorRoutingModule } from './prestador-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    PrestadorRoutingModule,
    SharedModule
  ]
})
export class PrestadorModule { }
