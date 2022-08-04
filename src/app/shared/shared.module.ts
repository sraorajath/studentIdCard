import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular-legacy';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// Angular material modules
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

// Components imports
import {
  HeaderComponent, SidebarComponent
} from './components/index';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    // Module imports
    CommonModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    // Module exports
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,

    // Component exports
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }