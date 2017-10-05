import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadSingleComponent} from './lead-single/lead-single.component';
import {LeadListComponent} from './lead-list/lead-list.component';
import {LeadsComponent} from './leads.component';
import {LeadsRoutingModule} from './leads-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LeadsRoutingModule
    ],
    declarations: [
        LeadsComponent,
        LeadListComponent,
        LeadSingleComponent
    ]
})
export class LeadsModule { }
