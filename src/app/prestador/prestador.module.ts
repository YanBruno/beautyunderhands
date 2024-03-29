import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrestadorRoutingModule } from './prestador-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { PrestadorDetalhePageComponent } from './pages/prestador-detalhe-page/prestador-detalhe-page.component';
import { ProviderService } from './services/provider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PretadorListaPageComponent } from './pages/pretador-lista-page/pretador-lista-page.component';
import { PrestadorNovoPageComponent } from './pages/prestador-novo-page/prestador-novo-page.component';
import { PrestadorDetalheFormComponent } from './components/prestador-detalhe-form/prestador-detalhe-form.component';
import { ContratoDetalheFormComponent } from './components/contrato-detalhe-form/contrato-detalhe-form.component';
import { ComissaoCardComponent } from './components/comissao-card/comissao-card.component';
import { ComissaoDetalheFormComponent } from './components/comissao-detalhe-form/comissao-detalhe-form.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    PrestadorDetalhePageComponent,
    PretadorListaPageComponent,
    PrestadorNovoPageComponent,
    PrestadorDetalheFormComponent,
    ContratoDetalheFormComponent,
    ComissaoCardComponent,
    ComissaoDetalheFormComponent
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
