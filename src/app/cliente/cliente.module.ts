import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClienteNovoPageComponent } from './pages/cliente-novo-page/cliente-novo-page.component';
import { ClienteDetalhePageComponent } from './pages/cliente-detalhe-page/cliente-detalhe-page.component';
import { ClienteListaPageComponent } from './pages/cliente-lista-page/cliente-lista-page.component';
import { ClienteService } from './services/cliente.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardPageComponent,
    ClienteNovoPageComponent,
    ClienteDetalhePageComponent,
    ClienteListaPageComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
