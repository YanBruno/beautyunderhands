import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Provider } from 'src/app/core/models/provider.model';
import { Name } from 'src/app/core/models/name.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  provider = {
    name: {} as Name
    , id: ''
    , createAt: ''
  } as Provider;

  constructor(private service: UserService) {
    this.service.getProvider().subscribe({
      next: result => {
        this.provider = result

        console.log(result);
      }
    });
  }
}
