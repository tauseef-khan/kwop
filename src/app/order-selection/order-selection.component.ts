import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'kw-order-selection',
  templateUrl: './order-selection.component.html',
  styleUrls: ['./order-selection.component.css']
})
export class OrderSelectionComponent implements OnInit {
  imageWidth: number = 50;

  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredItems = this.performFilter(this.listFilter);
  }

  filteredItems: IItem[];
  items: IItem[] = [];
  errorMessage: string;

  constructor(private itemService: ItemService) { }

  performFilter(filterBy: string): IItem[] {
    filterBy = filterBy.toLocaleLowerCase();

    if(filterBy.length <= 2){
      return [];
    }
    else{
      return this.items.filter((item: IItem) => 
          item.itemName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: items => {
        this.items = items
      },
      error: err => this.errorMessage = err
    })
  }

}
