import { Component, OnInit } from '@angular/core';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faAngleLeft=faAngleLeft
  constructor() { }

  ngOnInit(): void {
  }

}
