import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
