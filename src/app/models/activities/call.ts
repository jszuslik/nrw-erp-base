import {Activity} from './activity';

export class Call extends Activity {
    subject: string;
    type: string;
    purpose: string;
    relatedTo: string;
    description: string;
    billable: boolean;
    result: string;
}
