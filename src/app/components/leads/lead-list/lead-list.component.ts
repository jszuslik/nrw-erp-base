import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {LeadService} from '../../../services/leads/lead.service';
import {Lead} from '../../../models/lead';
import {PhonePipe} from '../../../pipes/phone.pipe';

@Component({
    selector: 'app-lead-list',
    templateUrl: './lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
    animations: [routerTransition()]
})
export class LeadListComponent implements OnInit {

    leads: Lead[];

  constructor(private _ls: LeadService) { }

  getLeads() {
      this._ls.getLeads()
          .subscribe(
              (leads: Lead[]) => {
                  this.leads = leads;
              }
          );
  }

  ngOnInit() {
      this.getLeads();
  }

}
