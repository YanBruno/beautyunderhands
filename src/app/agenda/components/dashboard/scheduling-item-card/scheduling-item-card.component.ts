import { Component, Input } from '@angular/core';
import { SchedulingItem } from 'src/app/agenda/models/schedulingItem.model';

@Component({
  selector: 'app-scheduling-item-card',
  templateUrl: './scheduling-item-card.component.html',
  styleUrls: ['./scheduling-item-card.component.css']
})
export class SchedulingItemCardComponent {

  @Input() agendamento = {} as SchedulingItem;

}
