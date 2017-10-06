import {Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import {PageHeader} from '../../models/shared/page-header';

@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss'],
    animations: [routerTransition()]
})
export class BsComponentComponent implements OnInit {

    pageheader: PageHeader = {
        heading: 'Bootstrap Components',
        image: '',
        breadcrumbs: [
            {
                title: 'Bootstrap Components',
                icon: 'fa-th-list',
                link: '',
                active: true
            }
        ]
    };

    constructor() {
    }

    ngOnInit() {
    }

}
