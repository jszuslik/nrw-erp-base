import { Component, Input } from '@angular/core';
import {PageHeader} from '../../../models/shared/page-header';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
    @Input() pageheader: PageHeader;
}
