import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationRoutingModule } from './formation-routing.module';

import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormationFormComponent,
   FormationListComponent,
   FormationDetailsComponent]
})
export class FormationModule { }
