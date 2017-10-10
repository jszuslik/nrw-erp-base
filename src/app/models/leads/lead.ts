import {Base} from '../base';
import {Contact} from '../contacts/contact';
import {User} from '../users/user';

export class Lead extends Contact {
    source: string;
    owner: User;
    description: string;
    lead_status: string;
}
