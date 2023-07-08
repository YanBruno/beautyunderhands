import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderResume } from '../../models/provider-resume.model';
import { ProviderService } from 'src/app/core/services/provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  prestadores: ProviderResume[] = [];

  subs: Subscription[] = [];

  constructor(private service: ProviderService) {


  }
  ngOnDestroy(): void {
    this.subs.forEach(x => { x.unsubscribe() });
  }
  ngOnInit(): void {
    this.onSearch("");
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