import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Security } from '../utils/security.util';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleSubject = new BehaviorSubject<Role | null>(null);
  public role = this.roleSubject.asObservable();

  constructor() { }

  updateRole() {
    this.roleSubject.next(Security.getRole());
  };

  isAdmin(): boolean {
    this.updateRole();
    if (this.roleSubject.value)
      if (this.roleSubject.value.id === 1)
        return true;

    return false;
  }
}