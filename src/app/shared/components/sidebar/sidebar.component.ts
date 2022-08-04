import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import { MenuItems } from 'src/app/core/interface/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidebarComponent implements OnInit {

  expanded: boolean = false;
  @Input() item: MenuItems;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() depth;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item) {
    if (!item.submenu || !item.submenu.length) {
      this.router.navigate([item.route]);
    }
    if (item.submenu && item.submenu.length) {
      this.expanded = !this.expanded;
    }
  }
}