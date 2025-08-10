export type Category = 'Electronics' | 'Clothing' | 'Groceries';

export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number; // 1-5
  category: Category;
}
