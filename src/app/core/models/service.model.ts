import { Title } from "@angular/platform-browser";
import { Details } from "./details.model";

export interface Service {
    title: Title;
    detalis: Details;
    durationTime: string;
    cost: number;
}