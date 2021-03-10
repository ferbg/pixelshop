import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//  Models
import { Shop } from '../models/shop.model';

//  Interfaces
import { Product } from '../interfaces/product';

//  Services
import { CartService } from '../cart.service';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit, OnDestroy {

  private shopSubscription: Subscription;
  errorHttp: boolean;

  shopModel : Shop;


  constructor(private http: HttpClient, private cartService: CartService) {
      this.shopModel = new Shop();
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => { this.shopModel.shopItems  = respuesta; },
      (respuesta: Response) => { this.errorHttp  = true; }
    );
  }

  ngOnDestroy(): void {
    this.shopSubscription.unsubscribe();
  }

  /**
   * addToCart
   */
  public addToCart( item : Product ) {
    this.cartService.add(item);
  }

  /**
   * remove
   */
  public remove( item : Product ) {
    this.cartService.remove(item.id);
  }

}