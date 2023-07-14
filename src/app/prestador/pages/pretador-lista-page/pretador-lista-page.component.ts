import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

import { Subscription } from 'rxjs';
import { PersonResume } from 'src/app/core/models/person-resume.model';


@Component({
  selector: 'app-pretador-lista-page',
  templateUrl: './pretador-lista-page.component.html',
  styleUrls: ['./pretador-lista-page.component.css']
})
export class PretadorListaPageComponent implements OnInit, OnDestroy {
  prestadores: PersonResume[] = [];

  subs: Subscription[] = [];

  constructor(private service: ProviderService) { }

  ngOnInit(): void {
    this.onSearch("");
  }

  ngOnDestroy(): void {
    this.subs.forEach(x => { x.unsubscribe() });
  }

  onSearch(text: string | null) {
    if (text) {
      if (text.length > 0) {
        this.service.getProvidersByName(text).subscribe({
          next: result => { this.prestadores = result; }
        });
      }
    }
    else {
      this.service.getProviders().subscribe({
        next: result => { this.prestadores = result; }
      });
    }
  }
}
