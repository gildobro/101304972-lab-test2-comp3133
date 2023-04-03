import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MissionDetailsService {
    constructor(private http: HttpClient) {}

    getMissionDetails(flightName: string): Observable<any> {
        const url = `https://api.spacexdata.com/v3/launches?mission_name=${flightName}`;
        return this.http.get<any>(url);
    }
}