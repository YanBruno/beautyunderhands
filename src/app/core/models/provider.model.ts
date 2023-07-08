import { Name } from "./name.model";
import { UnitContract } from "./unitContract.model";
import { Details } from "./details.model";
import { Email } from "./email.model";
import { Phone } from "./phone.model";
import { Comission } from "./comission.model";

export interface Provider {
    id: string;
    createAt: string;
    name: Name;
    phone: Phone;
    email: Email;
    details: Details;
    contracts: UnitContract[];
    comissions: Comission[];
}