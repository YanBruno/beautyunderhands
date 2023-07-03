import { Role } from "./role.model";
import { Unit } from "./unit.model";

export interface UnitContract {
    role: Role;
    unit: Unit
}