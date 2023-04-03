import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: any[] = [];
  selectedYear: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      // this.http.get<any[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      //   this.launches = data;
      // });
      this.getLaunches();
  }

  getLaunches() {
    let apiUrl = 'https://api.spacexdata.com/v3/launches';
    if (this.selectedYear) {
      apiUrl += `?launch_year=${this.selectedYear}`;
    }
    this.http.get<any[]>(apiUrl).subscribe(
      data => {
        this.launches = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  OnYearSelected(year: string){
    this.selectedYear = year;
    this.getLaunches();
  }


}
