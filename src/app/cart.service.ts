import { Injectable } from '@angular/core';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items : Array<Product>;
  constructor() {
    this.items = [];
  }

  /**
   * getItems
   */
  public getItems() {
    return this.items;
  }
  /**
   * add
   */
  public add( item : Product ) {
    this.items.push( item );
  }
  /**
   * remove
   */
  public remove( itemId : number ) {

    const index: number = this.items.findIndex( item => item.id === itemId );

    if ( index !== -1 ) {
      this.items.splice(index, 1);
    }
  }
}
