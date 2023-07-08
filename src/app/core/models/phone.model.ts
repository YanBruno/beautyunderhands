import { Verification } from "./verification.model";

export interface Phone {
    number: string;
    verification: Verification;
}