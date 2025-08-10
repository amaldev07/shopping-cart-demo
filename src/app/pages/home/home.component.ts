import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from '../../data/mock-products';
import { CartService } from '../../services/cart.service';
import { Category, Product } from '../../types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories: Category[] = ['Electronics', 'Clothing', 'Groceries'];
  selectedCategory: Category | 'All' = 'All';
  products: Product[] = MOCK_PRODUCTS;

  constructor(private cart: CartService) {}

  get filteredProducts() {
    return this.selectedCategory === 'All'
      ? this.products
      : this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(cat: Category | 'All') {
    this.selectedCategory = cat;
  }

  addToCart(p: Product) { this.cart.add(p); }
}
