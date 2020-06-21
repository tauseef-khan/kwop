import { OrderSelectionComponent } from "./order-selection.component";

describe('OrderSelectionComponent', () => {
  let component: OrderSelectionComponent;
  let ITEMS;
  let mockItemService;

  beforeEach(() => {
    ITEMS = [
      {
        "itemId": 1,
        "itemName": "British Whole Milk 2.27L (4 pint)",
        "itemCode": "ITM-0001",
        "description": "Pasteurised homogenised standardised whole milk",
        "price": 1.10,
        "imageUrl": "assets/images/ITM-0001_British _Whole_Milk_2.27L_(4 pint).jpg"
      },
      {
          "itemId": 2,
          "itemName": "British Skimmed Milk 2.27L (4 pint)",
          "itemCode": "ITM-0002",
          "description": "Pasteurised skimmed milk",
          "price": 1.10,
          "imageUrl": "assets/images/ITM-0002_British_Skimmed_Milk_2.27L_(4 pint).jpg"
      },
      {
          "itemId": 3,
          "itemName": "Cravendale Purefilter Semi Skimmed Milk 2L",
          "itemCode": "ITM-0003",
          "description": "Pasteurised, homogenised, semi-skimmed, fresh filtered milk",
          "price": 1.90,
          "imageUrl": "assets/images/ITM-0003_Cravendale_Purefilter_Semi_Skimmed_Milk_2L.jpg"
      },
      {
        "itemId": 4,
        "itemName": "Kingsmill Medium Sliced 50/50 Bread 800g",
        "itemCode": "ITM-0004",
        "description": "Soft White Bread made with 50% Wholemeal Wheat Flour (33% of the baked loaf)",
        "price": 1.00,
        "imageUrl": "assets/images/ITM-0004_Kingsmill_Medium_Sliced_50-50_Bread_800g.jpg"
    },
    {
        "itemId": 5,
        "itemName": "Hovis Soft Thick Sliced White Bread 800g",
        "itemCode": "ITM-0005",
        "description": "Thick Sliced White Bread",
        "price": 1.20,
        "imageUrl": "assets/images/ITM-0005_Hovis_Soft_Thick_Sliced_White_Bread_800g.jpg"
    }];

    mockItemService = jasmine.createSpyObj(['getItems']);
  })
  
  describe('addItem', () => {

    it('should have no items in the selected items list to start', () => {
      // arrange
      component = new OrderSelectionComponent(mockItemService);

      //assert
      expect(component.selectedItems.length).toBe(0);
    })

    it('should add the selected item to the selected items list', () => {
      // arrange
      component = new OrderSelectionComponent(mockItemService);

      // act
      component.addItem(ITEMS[1]);
      component.addItem(ITEMS[2]);

      // assert
      expect(component.selectedItems.length).toBe(2);
      //TODO: put in order total assert
    })
  })

  describe('performFilter', () => {

    it('should return the relevant items based on the search string', () => {
      // arrange
      component = new OrderSelectionComponent(mockItemService);
      component.items = ITEMS;

      // act
      component.listFilter = 'milk';

      // assert
      console.info(component.filteredItems);
      expect(component.filteredItems.length).toBe(3);
    })
  })

  //TODO: case for search string less than 2
  //TODO: case for max items returned to be lass than 5
});
