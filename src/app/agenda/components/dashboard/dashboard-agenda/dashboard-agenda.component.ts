import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { SchedulingItem } from '../../../models/schedulingItem.model';
import { Subscription } from 'rxjs';
import { UnitService } from 'src/app/core/services/unit.service';

@Component({
  selector: 'app-dashboard-agenda',
  templateUrl: './dashboard-agenda.component.html',
  styleUrls: ['./dashboard-agenda.component.css']
})
export class DashboardAgendaComponent implements OnInit, OnDestroy {

  showCalendar = false;
  agendamentos: SchedulingItem[] = [];

  private sub: Subscription[] = [];
  private day = new Date();

  constructor(
    public agendaService: AgendaService, private unitService: UnitService) { }

  ngOnInit(): void {
    this.sub.push(this.agendaService.selectedDay$.subscribe({
      next: day => {
        this.day = day;
        this.getSchedulingItems(this.day);
      }
    }));

    this.sub.push(this.unitService.isSelectedUnit.subscribe({
      next: () => {
        this.getSchedulingItems(this.day);
      }
    }));
  }

  ngOnDestroy(): void {
    this.sub.forEach(x => { x.unsubscribe() });
  }

  onShowCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  getSchedulingItems(day: Date) {
    this.agendaService.getSchedulingItems(day).subscribe({
      next: schedulings => {
        this.agendamentos = schedulings;
      },
      error: err => { }
    });
  }

  onSelectedDate(date: Date) {
    this.agendaService.setSelectedDay(date);
    this.showCalendar = false;
  }

  onChangeDate(number: number): void {
    this.agendamentos = [];
    const d = this.day;
    d.setDate(d.getDate() + number);
    this.agendaService.setSelectedDay(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
  }
}