import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadorRoutingModule } from './prestador-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { PrestadorDetalhePageComponent } from './pages/prestador-detalhe-page/prestador-detalhe-page.component';
import { ProviderService } from './services/provider.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardPageComponent,
    PrestadorDetalhePageComponent,
  ],
  imports: [
    CommonModule,
    PrestadorRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
  , providers: [ProviderService]
})
export class PrestadorModule { }
