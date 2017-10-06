import {Injectable} from '@angular/core';
import {LEADS} from '../../mockdata/mockleads';
import {Observable} from 'rxjs/Observable';
import {Lead} from '../../models/lead';

class Leads {
}

@Injectable()
export class LeadsService {

    constructor() { }

    getLeads(): Observable<Lead[]> {
        return Observable.of(LEADS);
    }
}