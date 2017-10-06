import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
    selector: 'app-lead-list',
    templateUrl: './lead-list.component.html',
    styleUrls: ['./lead-list.component.css'],
    animations: [routerTransition()]
})
export class LeadListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
