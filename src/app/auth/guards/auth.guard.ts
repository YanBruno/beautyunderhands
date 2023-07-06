import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "../services/auth.service";
import { first, tap } from "rxjs";

export const AuthGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    authService.updateLoggedIn();

    return authService
        .isLoggedIn
        .pipe(
            first(),
            tap(value => {
                if (!value)
                    router.navigate(['/entrar']);
            })
        );
}