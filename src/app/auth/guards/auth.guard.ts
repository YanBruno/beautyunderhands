import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service";
import { first, tap } from "rxjs";

export const AuthGuard = () => {
    const router = inject(Router);
    const service = inject(AuthService);

    service.updateLoggedIn();

    return service
        .isLoggedIn
        .pipe(
            tap(value => {
                if (!value)
                    router.navigate(['/login']);
            }),
            first()
        );
}