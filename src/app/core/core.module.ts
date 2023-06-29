import { NgModule, LOCALE_ID, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainFrameComponent } from './pages/frames/main-frame.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { OnlyNavbarFrameComponent } from './pages/frames/only-navbar-frame.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './pages/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MessagePageComponent } from './pages/message-page/message-page.component';

const COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  MainFrameComponent,
  NotfoundPageComponent,
  OnlyNavbarFrameComponent,
  LoaderComponent,
  MessagePageComponent
]
const MODULES = [
  CommonModule
  , RouterModule
  , HttpClientModule]

@NgModule({
  declarations: [
    COMPONENTS,

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
