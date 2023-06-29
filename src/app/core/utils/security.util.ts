import { Role } from "../models/role.model";
import { Unit } from "../models/unit.model";

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

    public static getUnit(): string | null {
        return this.getStorageValue('beautyu');
    }

    public static getRole(): string | null {
        return this.getStorageValue('beautyr');
    }

    private static setRole(role: Role): void {
        if (role)
            localStorage.setItem('beautyr', role.id)
    }

    private static setUnit(unit: Unit): void {
        if (unit)
            localStorage.setItem('beautyu', unit.id);
    }

    public static setToken(token: string): void {
        localStorage.setItem('beautyk', token);
    }

    public static setDefaultData(token: string, role: Role, unit: Unit) {
        this.setToken(token);
        this.setRole(role)
        this.setUnit(unit)
    }

    public static clear(): void {
        localStorage.removeItem('beautyr');
        localStorage.removeItem('beautyu');
        localStorage.removeItem('beautyk');
    }

    public static hasData(): boolean {
        const token = this.getToken();
        const role = this.getRole();
        const unit = this.getUnit();

        if (token && role && unit)
            return true;

        return false;
    }
}