import { Component, OnInit } from '@angular/core';

import { MenuItems } from './core/interface/sidebar.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'studentIdCard';

  isSidebarOpen = true;
  menuItems: MenuItems[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        id: 1,
        menuName: 'Institutions',
        icon: 'school',
        route: '',
        submenu: [
          {
            id: 1,
            menuName: 'Add Institution',
            icon: 'add',
            route: '/add-institution'
          },
          {
            id: 2,
            menuName: 'Institution List',
            icon: 'list',
            route: '/institution-list'
          }
        ]
      },
      {
        id: 2,
        menuName: 'Students',
        icon: 'people',
        route: '',
        submenu: [
          {
            id: 1,
            menuName: 'Add Students',
            icon: 'person_add',
            route: '/add-students'
          },
          {
            id: 2,
            menuName: 'Student List',
            icon: 'list',
            route: '/student-list'
          }
        ]
      }
    ];
  }

  sidebarToggler() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
