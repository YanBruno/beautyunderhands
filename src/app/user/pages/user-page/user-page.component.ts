import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Provider } from 'src/app/core/models/provider.model';
import { Name } from 'src/app/core/models/name.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  provider = {
    name: {} as Name
    , id: ''
    , createAt: ''
  } as Provider;

  constructor(private service: UserService) { }
  ngOnInit(): void {
    this.service.getProvider().subscribe({
      next: result => {
        this.provider = result
      }
    });
  }
}
