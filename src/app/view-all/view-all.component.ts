import { Component, OnInit } from '@angular/core';
import { RiderType } from '../model/Rider';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  riders: RiderType[];
  currentHr : any;
  constructor() { }

  ngOnInit() {
    let date = new Date();
    let currenthour = date.getHours();
    this.currentHr = currenthour;
    this.riders = JSON.parse(localStorage.getItem('riderData'));
  }

}
