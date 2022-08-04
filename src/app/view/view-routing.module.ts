import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view.component';
import {
  AddInstitutionComponent,
  ListInstitutionComponent
} from './institutions/index';

import {
  AddStudentComponent,
  ListStudentComponent
} from './students/index';

const routes: Routes = [
  {
    path: '', component: ViewComponent,
    children: [
      {
        path: 'add-institution', component: AddInstitutionComponent
      },
      {
        path: 'institution-list', component: ListInstitutionComponent

      },
      {
        path: 'add-students', component: AddStudentComponent
      },
      {
        path: 'student-list', component: ListStudentComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }