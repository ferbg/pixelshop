import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

//  Services
import { CartService } from '../cart.service';

//  Interfaces
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Input() product: Product;
  @Output() doAction : EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  isdisabled() {
    return this.cartService.getItems().findIndex( item => item.id === this.product.id ) !== -1;
  }

  /**
   * comprar
   */
  public comprar() {
    this.doAction.emit(this.product);
  }
}
