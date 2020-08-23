import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';

@Component({
  selector: 'kw-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderedItems: IItem[] = [];
  orderedItemNames: string = "";

  constructor() { }

  ngOnInit(): void {
    this.orderedItems = history.state.data;
    this.orderedItemNames = this.getItemNames(this.orderedItems);
  }

  getItemNames(items: IItem[]): string {
    for (let item of items) {
      this.orderedItemNames += '- ' + item.itemName + '\n';
    }

    return this.orderedItemNames;
  }

}
