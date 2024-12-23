import { Component, OnInit } from '@angular/core';
import { AutocompleteMatService } from './autocomplete-mat.service';
import { debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-complete-mat',
  templateUrl: './auto-complete-mat.component.html',
  styleUrls: ['./auto-complete-mat.component.css']
})
export class AutoCompleteMatComponent implements OnInit {

  fruitStream = new Subject<string>();
  selectedFruit: string = ''
  filteredFruits:any[] = []
  fruits: any[] = []

  form:FormGroup = new FormGroup({})
  vehicleStream =  new Subject<string>();
  selectedVehicle: string = ''
  filteredVehicles: any[] =[]
  vehicles: any[] = []


  constructor(private dataService: AutocompleteMatService, private fb: FormBuilder) { 
    this.fruitStream.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=>this.filter(term))
    ).subscribe(filtered => this.filteredFruits = filtered)

    this.vehicleStream.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=>this._filter(term))
    ).subscribe(filtered => this.filteredVehicles = filtered)
  }

  ngOnInit(): void {
    this.dataService.getFruits().subscribe((data)=>{
      console.log(data)
      this.fruits = data
      this.filteredFruits = data
    },(error)=>{
      console.log(error)
    })

    this.dataService.getVehicles().subscribe((data)=>{
      console.log(data)
      this.vehicles = data
      this.filteredVehicles= data
    },(error)=>{
      console.log(error)
    })

    this.form = this.fb.group({
      vehicle : ['']
    })
  }
  onInputChange(event: any)
  {
    
   this.fruitStream.next(event.target.value)
    ///
  }

  filter(value: string): Observable<string[]>
  {
    const filterValue = value.toLowerCase()
    return of(this.fruits.filter(fruit => fruit.name.toLowerCase().includes(filterValue)))
  }

  onInputReactiveChange(event: any)
  {
    
   this.vehicleStream.next(event.target.value)
    ///
  }
  _filter(value: string): Observable<string[]>
  {
    const filterValue = value.toLowerCase()
    return of(this.vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(filterValue)))
  }
}
