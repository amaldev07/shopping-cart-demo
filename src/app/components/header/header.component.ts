import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount = 0;
  private sub?: Subscription;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.sub = this.cart.items$.subscribe(items => (this.cartCount = items.length));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
