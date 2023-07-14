import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from '../../services/cliente.service';
import { PersonResume } from 'src/app/core/models/person-resume.model';

@Component({
  selector: 'app-cliente-lista-page',
  templateUrl: './cliente-lista-page.component.html',
  styleUrls: ['./cliente-lista-page.component.css']
})
export class ClienteListaPageComponent {
  clientes: PersonResume[] = [];

  subs: Subscription[] = [];

  constructor(private service: ClienteService) { }

  ngOnInit(): void {
    this.onSearch("");
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => { x.unsubscribe() });
  }

  onSearch(text: string | null) {
    if (text) {
      if (text.length > 0) {
        this.service.getCustomersByName(text).subscribe({
          next: result => { this.clientes = result; }
        });
      }
    }
    else {
      this.service.getCustomers().subscribe({
        next: result => { this.clientes = result; }
      });
    }
  }
}
