import { Name } from "./name.model";
import { Details } from "./details.model";
import { Email } from "./email.model";
import { Phone } from "./phone.model";

export interface Customer {
    id: string;
    createAt: string;
    name: Name;
    phone: Phone;
    email: Email;
    details: Details;
}