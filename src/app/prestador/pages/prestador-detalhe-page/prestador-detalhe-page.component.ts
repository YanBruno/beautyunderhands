import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from 'src/app/core/models/provider.model';
import { ProviderService } from 'src/app/prestador/services/provider.service';

@Component({
  selector: 'app-prestador-detalhe-page',
  templateUrl: './prestador-detalhe-page.component.html',
  styleUrls: ['./prestador-detalhe-page.component.css']
})
export class PrestadorDetalhePageComponent implements OnInit {

  private id = this.route.snapshot.paramMap.get('id') as string;
  provider: Provider | null = null;

  constructor(
    private route: ActivatedRoute
    , private providerService: ProviderService
  ) { }

  ngOnInit(): void {
    this.providerService.getProvider(this.id).subscribe({
      next: result => {
        this.provider = result;
      }
    });
  }

}
