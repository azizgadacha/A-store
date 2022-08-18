import { Component, OnInit } from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faCartShopping=faCartShopping
  faUser=faUser
  faMagnifyingGlass=faMagnifyingGlass
  constructor() { }

  ngOnInit(): void {
  }

}
