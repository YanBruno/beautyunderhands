import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    LoginFormComponent
    , SignupFormComponent
    , DashboardPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
