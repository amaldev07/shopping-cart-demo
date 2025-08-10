import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  // ---------- Electronics ----------
  {
    id: 'el-001',
    title: 'Wireless Headphones',
    price: 2499,
    rating: 4.5,
    category: 'Electronics',
    imageUrl:
      'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?cs=srgb&dl=pexels-daniel-reche-718241-3721941.jpg&fm=jpg',
    description: 'Over-ear wireless headphones with rich bass and 20-hour battery.'
  },
  {
    id: 'el-002',
    title: 'Android Smartphone',
    price: 14999,
    rating: 4.2,
    category: 'Electronics',
    imageUrl:
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?cs=srgb&dl=pexels-fotios-photos-1092644.jpg&fm=jpg',
    description: '6.5" display, dual cameras, long-lasting battery.'
  },
  {
    id: 'el-003',
    title: 'Work Laptop',
    price: 52999,
    rating: 4.4,
    category: 'Electronics',
    imageUrl:
      'https://images.pexels.com/photos/19761766/pexels-photo-19761766.jpeg?cs=srgb&dl=pexels-han-798356342-19761766.jpg&fm=jpg',
    description: '14" portable laptop ideal for study and productivity.'
  },

  // ---------- Clothing ----------
  {
    id: 'cl-001',
    title: 'Classic T-Shirt (Pack)',
    price: 799,
    rating: 4.1,
    category: 'Clothing',
    imageUrl:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?cs=srgb&dl=pexels-kaip-996329.jpg&fm=jpg',
    description: 'Soft cotton tees in assorted colors.'
  },
  {
    id: 'cl-002',
    title: 'Denim Jacket',
    price: 1999,
    rating: 4.6,
    category: 'Clothing',
    imageUrl:
      'https://images.pexels.com/photos/3538010/pexels-photo-3538010.jpeg?cs=srgb&dl=pexels-jeys-tubianosa-1222150-3538010.jpg&fm=jpg',
    description: 'Timeless denim layer for everyday wear.'
  },
  {
    id: 'cl-003',
    title: 'Casual Hoodie',
    price: 1299,
    rating: 4.3,
    category: 'Clothing',
    imageUrl:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?cs=srgb&dl=pexels-kaip-996329.jpg&fm=jpg',
    description: 'Cozy fleece hoodie for cool evenings.'
  },

  // ---------- Groceries ----------
  {
    id: 'gr-001',
    title: 'Basmati Rice (5 kg)',
    price: 499,
    rating: 4.7,
    category: 'Groceries',
    imageUrl:
      'https://images.pexels.com/photos/3737694/pexels-photo-3737694.jpeg?cs=srgb&dl=pexels-cottonbro-3737694.jpg&fm=jpg',
    description: 'Premium long-grain rice for daily cooking.'
  },
  {
    id: 'gr-002',
    title: 'Extra Virgin Olive Oil (1 L)',
    price: 699,
    rating: 4.5,
    category: 'Groceries',
    imageUrl:
      'https://images.pexels.com/photos/2771009/pexels-photo-2771009.jpeg?cs=srgb&dl=pexels-victorino-2771009.jpg&fm=jpg',
    description: 'Cold-pressed olive oil for salads and sautéing.'
  },
  {
    id: 'gr-003',
    title: 'Fresh Veggie Basket',
    price: 299,
    rating: 4.4,
    category: 'Groceries',
    imageUrl:
      'https://images.pexels.com/photos/5678108/pexels-photo-5678108.jpeg?cs=srgb&dl=pexels-viktoria-slowikowska-5678108.jpg&fm=jpg',
    description: 'Assorted seasonal vegetables, farm-fresh.'
  }
];