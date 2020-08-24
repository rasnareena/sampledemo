import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-solid-svg-icons';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	 BarsMenuIcon = faBars;
	  faEllipsisVIcon = faEllipsisV;
 	  faBellIcon = faBell;
 	  faCircleIcon = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
