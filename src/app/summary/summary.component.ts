import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

//  Interfaces
import { Product } from '../interfaces/product';

//  Services
import { CartService } from '../cart.service';

// Components
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Output() onRemove: EventEmitter<Product> = new EventEmitter();
  @ViewChild(ConfirmComponent, { static: false })
  confirmChild: ConfirmComponent;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    // this.confirmChild.isDisabled = true;
  }

  /**
   * remove
   */
  public remove(item: Product) {
    this.onRemove.emit(item);
  }

  /**
   * getItems
   */
  public getItems(): Array<Product> {
    if (this.confirmChild ) {
      if (this.cartService.getItems().length === 0) {
        this.confirmChild.isDisabled = true;
      } else {
        this.confirmChild.isDisabled = false;
      }
    }
    return this.cartService.getItems();
  }

  /**
   * getTotal
   */
  public getTotal() {
    let total: number = 0;
    this.cartService.getItems().forEach(item => total += item.price);
    return total;
  }
}
