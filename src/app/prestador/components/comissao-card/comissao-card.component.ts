import { Component, Input } from '@angular/core';
import { Comission } from 'src/app/core/models/comission.model';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-comissao-card',
  templateUrl: './comissao-card.component.html',
  styleUrls: ['./comissao-card.component.css']
})
export class ComissaoCardComponent {

  @Input() comission: Comission | null = null;


  constructor(private providerService: ProviderService) { }

  setCurrentComission(): void {
    this.providerService.setCurrentComission(this.comission);
  }
}
