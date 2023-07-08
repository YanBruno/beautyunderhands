import { Service } from "./service.model";

export interface Comission {
    createAt: Date;
    value: number;
    service: Service;
}