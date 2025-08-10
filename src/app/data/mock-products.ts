import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'el-001',
    title: 'Wireless Headphones',
    price: 2499,
    imageUrl: 'https://images.unsplash.com/photo-1518443895914-6f6f1a0efef9?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    category: 'Electronics'
  },
  {
    id: 'el-002',
    title: 'Smartphone (64 GB)',
    price: 14999,
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    rating: 4.2,
    category: 'Electronics'
  },
  {
    id: 'cl-001',
    title: 'Men\'s Cotton T-Shirt',
    price: 699,
    imageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
    rating: 4.1,
    category: 'Clothing'
  },
  {
    id: 'cl-002',
    title: 'Women\'s Denim Jacket',
    price: 1999,
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    category: 'Clothing'
  },
  {
    id: 'gr-001',
    title: 'Organic Rice (5 kg)',
    price: 529,
    imageUrl: 'https://images.unsplash.com/photo-1604908554027-91202c538d8b?q=80&w=800&auto=format&fit=crop',
    rating: 4.3,
    category: 'Groceries'
  },
  {
    id: 'gr-002',
    title: 'Extra Virgin Olive Oil (1 L)',
    price: 749,
    imageUrl: 'https://images.unsplash.com/photo-1474978528675-4a50a4508dc0?q=80&w=800&auto=format&fit=crop',
    rating: 4.4,
    category: 'Groceries'
  }
];
