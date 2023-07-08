import { Details } from "./details.model";
import { Email } from "./email.model";
import { Phone } from "./phone.model";
import { Title } from "./title.model";

export interface Unit {
    id: string;
    title: Title;
    phone: Phone;
    email: Email;
    details: Details;
    createAt: Date;
}