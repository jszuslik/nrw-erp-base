import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {PageHeader} from '../../models/shared/page-header';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    pageheader: PageHeader = {
        heading: 'Tables',
        image: '',
        breadcrumbs: [
            {
                title: 'Tables',
                icon: 'fa-table',
                link: '',
                active: true
            }
        ]
    };
    constructor() { }
    ngOnInit() { }
}
