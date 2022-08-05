import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';

import {
  AddInstitutionComponent,
  ListInstitutionComponent
} from './institutions/index';

import {
  AddStudentComponent,
  ListStudentComponent
} from './students/index';

@NgModule({
  declarations: [
    ViewComponent,
    AddInstitutionComponent,
    ListInstitutionComponent,
    AddStudentComponent,
    ListStudentComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ViewComponent]
})
export class ViewModule { }