import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainFrameComponent } from './pages/frames/main-frame/main-frame.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OnlyNavbarFrameComponent } from './pages/frames/only-navbar-frame/only-navbar-frame.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainFrameComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    OnlyNavbarFrameComponent
  ],
  imports: [
    CommonModule

    , RouterModule
  ],
  providers: [{
    provide: LOCALE_ID
    , useValue: 'pt-BR'
  }]
})
export class CoreModule { }
