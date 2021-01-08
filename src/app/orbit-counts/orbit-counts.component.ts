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

  typeCount(type: string){
    let total = 0;
    let countType = type.toLowerCase();
    for(let i = 0; i < this.satellites.length; i++) {
      let satellite = this.satellites[i];
      if(satellite.type.toLowerCase() === countType){
        total += 1;
      };
    }
    return total;
  }
}
