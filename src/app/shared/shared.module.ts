import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarService } from './services/calendar.service';
import { NamePipe } from './pipes/name.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { EmailPipe } from './pipes/email.pipe';
import { DetailsPipe } from './pipes/details.pipe';


@NgModule({
  declarations: [
    SearchBarComponent,
    CalendarComponent,
    NamePipe,
    PhonePipe,
    EmailPipe,
    DetailsPipe
  ],
  imports: [
    CommonModule
    , ReactiveFormsModule
  ]
  , exports: [
    SearchBarComponent,
    CalendarComponent,
    NamePipe,
    PhonePipe,
    EmailPipe,
    DetailsPipe
  ]
  , providers: [CalendarService]
})
export class SharedModule { }
