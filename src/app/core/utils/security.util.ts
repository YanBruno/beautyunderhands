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

    public static setToken(token: string): void {
        localStorage.setItem('beautyk', token);
    }

    public static setUnit(unit: string): void {
        localStorage.setItem('beautyu', unit);
    }

    public static clear(): void {
        localStorage.removeItem('beautyk');
        localStorage.removeItem('beautyu');
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;

        return false;
    }
}