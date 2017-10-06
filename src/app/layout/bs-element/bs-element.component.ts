import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {PageHeader} from '../../models/shared/page-header';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {

    pageheader: PageHeader = {
        heading: 'Bootstrap Elements',
        image: '',
        breadcrumbs: [
            {
                title: 'Bootstrap Elements',
                icon: 'fa-desktop',
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
