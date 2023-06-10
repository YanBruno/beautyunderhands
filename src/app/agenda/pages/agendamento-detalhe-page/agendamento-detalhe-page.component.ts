import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamento-detalhe-page',
  templateUrl: './agendamento-detalhe-page.component.html',
  styleUrls: ['./agendamento-detalhe-page.component.css']
})
export class AgendamentoDetalhePageComponent {

  agendamentoId = this.route.snapshot.paramMap.get('id');
  form = this.fb.group({});


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
  }
}
