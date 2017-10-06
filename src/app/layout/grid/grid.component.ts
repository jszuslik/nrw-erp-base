import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {PageHeader} from '../../models/shared/page-header';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {

    pageheader: PageHeader = {
        heading: 'Bootstrap Grid',
        image: '',
        breadcrumbs: [
            {
                title: 'Bootstrap Grid',
                icon: 'fa-wrench',
                link: '',
                active: true
            }
        ]
    };

    constructor() { }
    ngOnInit() { }
}
