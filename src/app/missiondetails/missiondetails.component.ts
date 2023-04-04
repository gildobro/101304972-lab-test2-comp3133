import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionDetailsService } from '../services/missiondetails.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  missionDetails: any;
  @Input() flight_number: string = '';

  constructor(
    private route: ActivatedRoute,
    private missionDetailsService: MissionDetailsService
  ){ }

  ngOnInit(){
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    if (flightNumber) {
      try{
        this.missionDetailsService.getMissionDetails(flightNumber).subscribe((data: any) => {
          this.missionDetails = data;
          console.log('Mission Details:', data);
        });
      } catch (error) {
        console.error('Error fetching misison details:', error);
      }
    }    
  }

}
