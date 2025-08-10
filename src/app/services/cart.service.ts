import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types/product';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items$ = new BehaviorSubject<Product[]>([]);
  readonly items$ = this._items$.asObservable();

  get items() { return this._items$.value; }

  add(product: Product) {
    this._items$.next([...this.items, product]);
  }

  clear() { this._items$.next([]); }
}
