import {Address} from '../address/address';
import {AuditableBase} from '../auditable-base';
import {Note} from '../notes/note';
import {Activity} from '../activities/activity';

export class Contact extends AuditableBase {
    title: string;
    firstName: string;
    lastName: string;
    primaryPhone: string;
    mobilePhone: string;
    fax: string;
    image: string;
    skypeId: string;
    twitter: string;
    linkedIn: string;
    primaryEmail: string;
    secondaryEmail: string;
    email_opt_out: boolean;
    address: Address;
    company: Account;
    notes: Note[];
    activities: Activity[];
}
