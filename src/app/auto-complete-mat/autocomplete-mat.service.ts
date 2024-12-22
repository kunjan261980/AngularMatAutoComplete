import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteMatService {

  constructor(private http: HttpClient) { }

  getFruits(): Observable<any[]>
  {
    return this.http.get<any[]>('assets/data/fruits.json')
  }
  getVehicles(): Observable<any[]>
  {
    return this.http.get<any[]>('assets/data/vehicles.json')
  }
}
