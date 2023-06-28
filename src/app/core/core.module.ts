import { NgModule, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainFrameComponent } from './pages/frames/main-frame.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OnlyNavbarFrameComponent } from './pages/frames/only-navbar-frame.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

const COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  MainFrameComponent,
  NotfoundPageComponent,
  LoginPageComponent,
  OnlyNavbarFrameComponent,
  SignupPageComponent,
  LoaderComponent]
const MODULES = [
  CommonModule
  , RouterModule
  , ReactiveFormsModule
  , HttpClientModule]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [COMPONENTS, MODULES],
  providers: [
    {
      provide: LOCALE_ID
      , useValue: 'pt-BR'
    }
    , {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
      );
    }
  }
}
