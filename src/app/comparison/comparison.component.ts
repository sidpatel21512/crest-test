import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/model';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  @Input() products: IProduct[];
  constructor() { }

  ngOnInit(): void {
  }

  public removeProductFromComparison(index: number) {
    console.log(index);
    this.products.splice(index, 1);
  }

}
