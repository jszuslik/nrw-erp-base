import {Activity} from './activity';

export class Event extends Activity {
    title: string;
    allDay: boolean;
    startTimeDate: string;
    endTimeDate: string;
    host: string;
}
