import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamento-detalhe-page',
  templateUrl: './agendamento-detalhe-page.component.html',
  styleUrls: ['./agendamento-detalhe-page.component.css']
})
export class AgendamentoDetalhePageComponent {

  agendamentoId = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) {
  }
}
