import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-agendamento-page',
  templateUrl: './novo-agendamento-page.component.html',
  styleUrls: ['./novo-agendamento-page.component.css']
})
export class NovoAgendamentoPageComponent {

  form = this.fb.group({
    email: ['', Validators.compose([
      Validators.email
      , Validators.required
    ])]
    , password: ['', Validators.compose([
      Validators.maxLength(8)
      , Validators.required
    ])]
  });

  constructor(private fb: FormBuilder) { }

}
