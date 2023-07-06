import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFrameComponent } from './core/pages/frames/main-frame.component';
import { NotfoundPageComponent } from './core/pages/notfound-page/notfound-page.component';
import { OnlyNavbarFrameComponent } from './core/pages/frames/only-navbar-frame.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ContractContextGuard } from './core/guards/contract-context.guard';

const routes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: '/agenda' }
  , {
    path: ''
    , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
  , {
    path: 'clientes'
    , canMatch: [AuthGuard, ContractContextGuard]
    , component: MainFrameComponent
    , loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  }
  , {
    path: 'prestadores'
    , canMatch: [AuthGuard]
    , component: MainFrameComponent
    , loadChildren: () => import('./prestador/prestador.module').then(m => m.PrestadorModule)
  }
  , {
    path: 'agenda'
    , canMatch: [AuthGuard, ContractContextGuard]
    , component: MainFrameComponent
    , loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  }
  , {
    path: 'conta'
    , canMatch: [AuthGuard]
    , component: OnlyNavbarFrameComponent
    , loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
  , {
    path: '**', component: NotfoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
