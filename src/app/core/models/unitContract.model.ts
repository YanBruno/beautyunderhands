import { Role } from "./role.model";
import { Unit } from "./unit.model";

export interface UnitContract {
    roleType: Role;
    unit: Unit
}