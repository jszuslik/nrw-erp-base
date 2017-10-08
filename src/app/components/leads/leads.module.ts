import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadSingleComponent} from './lead-single/lead-single.component';
import {LeadListComponent} from './lead-list/lead-list.component';
import {LeadsComponent} from './leads.component';
import {LeadsRoutingModule} from './leads-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {LeadService} from '../../services/leads/lead.service';
import {PhonePipe} from '../../pipes/phone.pipe';
import {InlineEditComponent} from '../shared/inline-edit/inline-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LeadsRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    declarations: [
        LeadsComponent,
        LeadListComponent,
        LeadSingleComponent,
        PhonePipe,
        InlineEditComponent
    ],
    providers: [
        LeadService,
        PhonePipe
    ]
})
export class LeadsModule { }
