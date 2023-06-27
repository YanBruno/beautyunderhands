import { Component, Input } from '@angular/core';
import { SchedulingItem } from '../../models/schedulingItem.model';
import { ActivatedRoute } from '@angular/router';
import { SchedulingService } from '../../services/scheduling.service';

@Component({
  selector: 'app-agendamento-detalhe-page',
  templateUrl: './agendamento-detalhe-page.component.html',
  styleUrls: ['./agendamento-detalhe-page.component.css']
})
export class AgendamentoDetalhePageComponent {

  agendamento: SchedulingItem = {} as SchedulingItem;
  agendamentoId = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute
    , private schedulingService: SchedulingService
  ) {
    if (this.agendamentoId)
      this.schedulingService.getSchedulingItem(this.agendamentoId).subscribe(
        {
          next: result => {
            this.agendamento = result
          }
          , error: err => { }
        }
      );
  }
}
