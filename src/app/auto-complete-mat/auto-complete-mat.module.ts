import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteMatRoutingModule } from './auto-complete-mat-routing.module';
import { AutoCompleteMatComponent } from './auto-complete-mat.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AutoCompleteMatComponent
  ],
  imports: [
    CommonModule,
    AutoCompleteMatRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AutoCompleteMatModule { }
