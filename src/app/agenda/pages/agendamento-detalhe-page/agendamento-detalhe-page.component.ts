import { Component } from '@angular/core';
import { SchedulingItem } from '../../models/schedulingItem.model';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agendamento-detalhe-page',
  templateUrl: './agendamento-detalhe-page.component.html',
  styleUrls: ['./agendamento-detalhe-page.component.css']
})
export class AgendamentoDetalhePageComponent {

  agendamento: SchedulingItem | null = null;
  agendamentoId = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute
    , private agendaService: AgendaService
  ) {
    if (this.agendamentoId)
      this.agendaService.getSchedulingItem(this.agendamentoId).subscribe(
        {
          next: result => {
            this.agendamento = result;
          }
          , error: err => { }
        }
      );
  }
}
