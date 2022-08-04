import { NgModule } from '@angular/core';

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
    ViewRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ViewComponent]
})
export class ViewModule { }