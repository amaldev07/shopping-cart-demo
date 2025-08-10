// src/app/data/mock-products.ts
export type Category = 'Electronics' | 'Clothing' | 'Groceries';

export interface Product {
  id: string;
  title: string;
  price: number;            // in INR for example
  rating: number;           // 0–5
  category: Category;
  imageUrl: string;
  description?: string;
}