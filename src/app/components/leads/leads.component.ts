import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.animations';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
    animations: [routerTransition()]
})
export class LeadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
