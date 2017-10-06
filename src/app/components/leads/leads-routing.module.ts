import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LeadsComponent} from './leads.component';
import {LeadListComponent} from './lead-list/lead-list.component';
import {LeadSingleComponent} from './lead-single/lead-single.component';

const routes: Routes = [
    {
        path: '', component: LeadsComponent,
        children: [
            {
                path: '',
                component: LeadListComponent
            },
            {
                path: 'single',
                component: LeadSingleComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeadsRoutingModule { }