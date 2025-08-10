import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    { id: 'electronics', name: 'Electronics', icon: '💻' },
    { id: 'clothes', name: 'Clothes', icon: '👗' },
    { id: 'books', name: 'Books', icon: '📚' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'sports', name: 'Sports', icon: '🏀' },
  ];

  items = [
    { id: 1, name: 'Smart TV', category: 'electronics', price: 499, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=200&h=200' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 899, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=200&h=200' },
    { id: 3, name: 'Headphones', category: 'electronics', price: 99, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=200&h=200' },
    { id: 4, name: 'T-shirt', category: 'clothes', price: 19, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=200&h=200' },
    { id: 5, name: 'Jeans', category: 'clothes', price: 39, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=200&h=200' },
    { id: 6, name: 'Jacket', category: 'clothes', price: 59, image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=facearea&w=200&h=200' },
    { id: 7, name: 'Novel', category: 'books', price: 14, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=200&h=200' },
    { id: 8, name: 'Cookbook', category: 'books', price: 24, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=200&h=200' },
    { id: 9, name: 'Notebook', category: 'books', price: 7, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=200&h=200' },
    { id: 10, name: 'Sofa', category: 'home', price: 299, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=facearea&w=200&h=200' },
    { id: 11, name: 'Lamp', category: 'home', price: 29, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=200&h=200' },
    { id: 12, name: 'Blender', category: 'home', price: 49, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=200&h=200' },
    { id: 13, name: 'Football', category: 'sports', price: 25, image: 'https://images.unsplash.com/photo-1505843279827-4b9b06c1b6c2?auto=format&fit=facearea&w=200&h=200' },
    { id: 14, name: 'Tennis Racket', category: 'sports', price: 89, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=200&h=200' },
    { id: 15, name: 'Yoga Mat', category: 'sports', price: 20, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=facearea&w=200&h=200' },
  ];

  constructor(private router: Router) {}

  getItemsByCategory(categoryId: string) {
    return this.items.filter(item => item.category === categoryId);
  }

  goToItem(categoryId: string, itemId: number) {
    this.router.navigate([`/${categoryId}/${itemId}`]);
  }
}
