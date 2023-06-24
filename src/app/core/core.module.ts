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
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainFrameComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    OnlyNavbarFrameComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule

    , RouterModule
    , ReactiveFormsModule
    , HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID
    , useValue: 'pt-BR'
  }]
})
export class CoreModule { }
