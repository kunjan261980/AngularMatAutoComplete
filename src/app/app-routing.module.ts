import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'autocomplete', loadChildren: () => import('./auto-complete-mat/auto-complete-mat.module').then(m => m.AutoCompleteMatModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
