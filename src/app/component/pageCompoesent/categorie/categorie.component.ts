import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  productListe=[5,6,5,5,8,8,6,7,7]

  constructor() { }

  ngOnInit(): void {
  }

}
