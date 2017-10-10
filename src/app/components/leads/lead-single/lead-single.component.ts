import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Lead} from '../../../models/leads/lead';
import {LeadService} from '../../../services/leads/lead.service';
import {routerTransition} from '../../../router.animations';
import {PageHeader} from '../../../models/shared/page-header';
import {PhonePipe} from '../../../pipes/phone.pipe';
import {NEWLEAD} from '../../../mockdata/mockleads';

@Component({
    selector: 'app-lead-single',
    templateUrl: './lead-single.component.html',
    styleUrls: ['./lead-single.component.css'],
    animations: [routerTransition()]
})
export class LeadSingleComponent implements OnInit {

    lead: Lead = NEWLEAD;
    primaryPhone: string;
    mobilePhone: string;

    pageheader: PageHeader = {
        heading: '',
        image: '',
        breadcrumbs: [
            {
                title: 'Leads',
                icon: 'fa-address-card-o',
                link: '/leads',
                active: false
            }
        ]
    };

    constructor(
        private route: ActivatedRoute,
        private _ls: LeadService,
        private _phonePipe: PhonePipe
    ) { }

    getLeadById(id: number) {
        this._ls.getLeadById(id)
            .subscribe(
                (lead: Lead) => {
                    this.lead = lead;
                    console.log(lead);
                },
                (e: any) => {
                    console.error(e);
                },
                () => {
                    this.pageheader.heading = this.lead.firstName + ' ' + this.lead.lastName;
                    this.pageheader.image = this.lead.image;
                    this.pageheader.breadcrumbs.push(
                        {
                            title: this.lead.firstName + ' ' + this.lead.lastName,
                            icon: 'fa-address-book-o',
                            link: '',
                            active: true
                        }
                    );
                    this.primaryPhone = this.transformPhone(this.lead.primaryPhone);
                    this.mobilePhone = this.transformPhone(this.lead.mobilePhone);
                }
            );
    }

    transformPhone(phone: string) {
        return this._phonePipe.transform(phone, null);
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.getLeadById(params['id']);
                }
            );
    }

}
