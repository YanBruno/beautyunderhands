import { Component, Input } from '@angular/core';
import { Comission } from 'src/app/core/models/comission.model';

@Component({
  selector: 'app-comissao-card',
  templateUrl: './comissao-card.component.html',
  styleUrls: ['./comissao-card.component.css']
})
export class ComissaoCardComponent {

  @Input() comission: Comission | null = null;
}
