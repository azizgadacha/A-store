import { Component, OnInit } from '@angular/core';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faAngleLeft=faAngleLeft
  productListe=[5,6,5,5,8,8,6,7,7]

  constructor() { }

  ngOnInit(): void {
  }

}
