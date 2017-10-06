import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {PageHeader} from '../../models/shared/page-header';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    pageheader: PageHeader = {
        heading: 'Forms',
        image: '',
        breadcrumbs: [
            {
                title: 'Forms',
                icon: 'fa-edit',
                link: '',
                active: true
            }
        ]
    };

    constructor() { }
    ngOnInit() {}
}
