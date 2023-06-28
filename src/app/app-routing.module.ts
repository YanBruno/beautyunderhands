import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFrameComponent } from './core/pages/frames/main-frame.component';
import { NotfoundPageComponent } from './core/pages/notfound-page/notfound-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { OnlyNavbarFrameComponent } from './core/pages/frames/only-navbar-frame.component';
import { SignupPageComponent } from './core/pages/signup-page/signup-page.component';

const routes: Routes = [
  { pathMatch: 'full', path: '', redirectTo: '/login' }
  , {
    path: 'login'
    , component: LoginPageComponent
  }
  , {
    path: 'registrar'
    , component: SignupPageComponent
  }
  , {
    path: 'clientes'
    , component: MainFrameComponent
    , loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  }
  , {
    path: 'prestadores'
    , component: MainFrameComponent
    , loadChildren: () => import('./prestador/prestador.module').then(m => m.PrestadorModule)
  }
  , {
    path: 'agenda'
    , component: MainFrameComponent
    , loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule)
  }
  , {
    path: 'conta'
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
