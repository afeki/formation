import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormationListComponent} from './formation-list/formation-list.component';
import {FormationFormComponent} from './formation-form/formation-form.component';
import {FormationDetailsComponent} from './formation-details/formation-details.component';

const routes: Routes = [
  {path: '', component: FormationListComponent},
  {path: 'form/:id', component: FormationFormComponent},
  {path: 'form', component: FormationFormComponent},
  {path: 'details/:id', component: FormationDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
