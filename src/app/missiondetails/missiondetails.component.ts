import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  missionDetails: any;
  @Input() flight_name: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ){ }

  ngOnInit(){
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    const url = `https://api.spacexdata.com/v3/launches/${flightNumber}`;
    this.http.get(url).subscribe(data => {
      this.missionDetails = data;
    });
  }

}
