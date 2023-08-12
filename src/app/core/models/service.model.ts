
import { Details } from "./details.model";
import { Title } from "./title.model";
import { Unit } from "./unit.model";

export interface Service {
    title: Title;
    detalis: Details;
    durationTime: string;
    cost: number;
    unit: Unit
}