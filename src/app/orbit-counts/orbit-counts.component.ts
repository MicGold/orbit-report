import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  spaceDebrisCount(){
    let total = 0;
    for(let i = 0; i < this.satellites.length; i++) {
      let satellite = this.satellites[i];
      if(satellite.type.toLowerCase() === 'space debris'){
        total += 1;
      };
    return total;
    }
  }
}
