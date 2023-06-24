import { Component, Input } from '@angular/core';
import { SchedulingItem } from 'src/app/agenda/models/schedulingItem.model';

@Component({
  selector: 'app-scheduling-item',
  templateUrl: './scheduling-item.component.html',
  styleUrls: ['./scheduling-item.component.css']
})
export class SchedulingItemComponent {

  @Input() agendamento = {} as SchedulingItem;

}
