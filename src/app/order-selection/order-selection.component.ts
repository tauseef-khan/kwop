import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'kw-order-selection',
  templateUrl: './order-selection.component.html',
  styleUrls: ['./order-selection.component.css']
})
export class OrderSelectionComponent implements OnInit {
  items: IItem[] = [];
  errorMessage: string;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: items => {
        this.items = items
      },
      error: err => this.errorMessage = err
    })
  }

}
