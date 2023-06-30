import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarService } from './services/calendar.service';

@NgModule({
  declarations: [
    SearchBarComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
    , ReactiveFormsModule
  ]
  , exports: [
    SearchBarComponent,
    CalendarComponent
  ]
  , providers: [CalendarService]
})
export class SharedModule { }
