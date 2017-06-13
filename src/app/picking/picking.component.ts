import { Component, OnInit } from '@angular/core';

class Product{
  code: string;
  name: string;
  color: string;
  description: string;
  quantify: string; 

}

@Component({
  selector: 'app-picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.css']
})
export class PickingComponent implements OnInit {

  private date: Date= new Date();
  private productList: Product[];

  constructor() { }

  ngOnInit() {
    this.productList=[{code:"123",name: "Dummy product", color:"negro", description:"tamaños",quantify:"123" }]
  }

}
