import { Verification } from "./verification.model";

export interface Email {
    address: string;
    verification: Verification;
}