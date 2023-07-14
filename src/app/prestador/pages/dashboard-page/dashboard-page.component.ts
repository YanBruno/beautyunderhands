import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProviderResume } from '../../models/provider-resume.model';
import { ProviderService } from 'src/app/prestador/services/provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent { }