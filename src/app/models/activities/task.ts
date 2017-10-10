import {Activity} from './activity';

export class Task extends Activity {
    subject: string;
    dueDate: string;
    priority: string;
    description: string;
}
