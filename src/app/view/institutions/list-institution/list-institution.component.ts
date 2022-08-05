import { Component, OnInit } from "@angular/core";
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'list-institution',
  templateUrl: './list-institution.component.html',
  styleUrls: ['list-institution.component.scss']
})
export class ListInstitutionComponent implements OnInit {

  public columnDefs;
  public gridApi;
  public gridColumnApi;
  public gridOptions: GridOptions;
  public defaultColDef;
  public rowData;
  public rowStyle;
  public frameworkComponents;

  constructor() { }

  ngOnInit(): void {
    this.columnDefs = [
      // {
      //   cellRenderer: 'btnCellRenderer',
      //   cellRendererParams: {
      //     clicked: this.viewOrderDetails.bind(this),
      //     btnConfigurations: [
      //       {
      //         icon: 'visibility',
      //         tooltip: 'View Order',
      //         type: 'view'
      //       }
      //     ]
      //   },
      //   width: 120
      // },
      { headerName:'Sl.No', field: 'id', width: 120 },
      { headerName:'Institution Name', field: 'institution_name', sortable: true },
      { headerName:'Contact Number', field: 'contact_number' },
      { headerName:'Email', field: 'email'},
      { headerName:'Address', field: 'address'}
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      // defaultColDef: this.defaultColDef,
      // frameworkComponents: this.frameworkComponents,
      // rowStyle: this.rowStyle,
      suppressCellFocus: true
    };

    this.rowData = [
      { id: 1, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 2, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 3, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 4, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 5, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 6, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 7, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 8, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 9, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 10, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
      { id: 11, institution_name: 'Test Institution', contact_number: 2198389773, email: 'test@gmail.com', address: 'Test Street, Test city, Bangalore, 448389'},
    ];
  }

  onReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}