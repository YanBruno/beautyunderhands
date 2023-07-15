import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.css']
})
export class AgendaPageComponent implements OnInit, OnDestroy {

  activeView = 3;
  isAdmin = false;
  sub = new Subscription();

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.sub = this.roleService.role.subscribe({
      next: () => {
        this.isAdmin = this.roleService.isAdmin();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  changeActiveView(number: number) {
    this.activeView = number;
  }
}
