import {Injectable} from '@angular/core';
import {LeadsService} from './leads.service';
import {LEADS} from '../../mockdata/mockleads';
import {Lead} from '../../models/leads/lead';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LeadService extends LeadsService {

    constructor(

    ) {
        super();
    }

    getLeadById(id: number): Observable<Lead> {
        // let lead = null;
        const lead = LEADS.filter(function (l) {
            if (l.id == id) {
                return l;
            }
        });
        return Observable.of(lead[0]);
    }

}
