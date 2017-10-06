import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadSingleComponent} from './lead-single/lead-single.component';
import {LeadListComponent} from './lead-list/lead-list.component';
import {LeadsComponent} from './leads.component';
import {LeadsRoutingModule} from './leads-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {LeadService} from '../../services/leads/lead.service';
import {PhonePipe} from '../../pipes/phone.pipe';

@NgModule({
    imports: [
        CommonModule,
        LeadsRoutingModule,
        PageHeaderModule
    ],
    declarations: [
        LeadsComponent,
        LeadListComponent,
        LeadSingleComponent,
        PhonePipe
    ],
    providers: [
        LeadService
    ]
})
export class LeadsModule { }
