import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { first, tap } from "rxjs";
import { ContractContextService } from "src/app/core/services/contract-context.service";

export const ContractContextGuard = () => {
    const router = inject(Router);
    const contractService = inject(ContractContextService);

    contractService.updateContractContext();

    return contractService
        .hasContractContext
        .pipe(
            first(),
            tap(value => {
                if (!value)
                    router.navigate(['conta']);
            })
        );
}