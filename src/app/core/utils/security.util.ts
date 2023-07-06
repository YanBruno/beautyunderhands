import { Role } from "../models/role.model";
import { UnitContract } from "../models/unitContract.model";

export class Security {

    private static getStorageValue(key: string): string | null {
        const value = localStorage.getItem(key);
        if (value) {
            return value;
        } else {
            return null;
        }
    }

    public static getToken(): string | null {
        return this.getStorageValue('beautyk')
    }

    public static getContract(): string | null {
        return this.getStorageValue('beautyc')
    }

    public static getRole(): Role | null {
        if (this.hasContract()) {
            const { roleType } = JSON.parse(this.getContract()!) as UnitContract;
            return roleType
        }

        return null;
    }

    public static getUnitId(): string | null {
        if (this.hasContract()) {
            const { unit } = JSON.parse(this.getContract()!) as UnitContract;
            return unit.id
        }

        return null;
    }

    public static setToken(token: string): void {
        localStorage.setItem('beautyk', token);
    }

    public static setContract(contract: UnitContract): void {
        localStorage.setItem('beautyc', JSON.stringify(contract));
    }

    public static clear(): void {
        localStorage.removeItem('beautyk');
        localStorage.removeItem('beautyc');
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;

        return false;
    }

    public static hasContract(): boolean {
        if (this.getContract())
            return true;

        return false;
    }
}