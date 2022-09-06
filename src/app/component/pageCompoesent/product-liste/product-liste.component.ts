import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-liste',
  templateUrl: './product-liste.component.html',
  styleUrls: ['./product-liste.component.css']
})
export class ProductListeComponent implements OnInit {
productListe=[5,6,5,5,8,8,6,7,7]
  constructor() { }

  ngOnInit(): void {
  }

}
