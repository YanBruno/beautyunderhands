import { Name } from "./name.model";

export interface Provider {
    id: string;
    createAt: string;
    name: Name;
}