import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';



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
})
export class SharedModule { }
