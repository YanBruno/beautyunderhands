import { Details } from "./valueObjects/details.model";
import { Email } from "./valueObjects/email.model";
import { Phone } from "./valueObjects/phone.model";
import { Title } from "./valueObjects/title.model";

export interface Unit {
    id: string;
    title: Title;
    phonr: Phone;
    email: Email;
    details: Details;
    createAt: Date;
}