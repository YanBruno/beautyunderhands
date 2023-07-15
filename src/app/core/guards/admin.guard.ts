import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { first, tap } from "rxjs";
import { RoleService } from "src/app/core/services/role.service";

export const AdminGuard = () => {
    const router = inject(Router);
    const roleService = inject(RoleService);

    roleService.updateRole();

    return roleService
        .role
        .pipe(
            first(),
            tap(value => {
                if (!value)
                    router.navigate(['conta']);

                if (value)
                    if (value.id !== 1)
                        router.navigate(['conta']);
            })
        );
}