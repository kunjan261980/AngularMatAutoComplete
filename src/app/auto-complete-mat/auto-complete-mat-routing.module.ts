import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteMatComponent } from './auto-complete-mat.component';

const routes: Routes = [{ path: '', component: AutoCompleteMatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCompleteMatRoutingModule { }
