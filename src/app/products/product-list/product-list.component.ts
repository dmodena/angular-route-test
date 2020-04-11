import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [ {name: "Test", price: 2.25}, {name: "Test2", price: 2.35} ];

  constructor() { }

  ngOnInit(): void {
  }

}
