export class Security {
    public static setToken(token: string): void {
        localStorage.setItem('beautykey', token);
    }

    public static clear(): void {
        localStorage.removeItem('beautykey');
    }

    public static getToken(): string | null {
        const token = localStorage.getItem('beautykey');
        if (token) {
            return token;
        } else {
            return null;
        }
    }
}