import { Product } from './core/product';
import { Size } from './core/size';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'PUMA FUTURE Z 1.1 PRO',
    imageUrls: ['./assets/images/white.jpg', '/assets/images/yellow.jpg', '/assets/images/blue.jpg'],
    price: 10,
    flavors: [
      { name: 'white', color: '#ffb3b3', },
      { name: 'yellow', color: '#F88532' },
      { name: 'blue', color: '#0080ff' },
    ],
    sizes: [Size.BONMUOI, Size.BONMOT, Size.BONHAI],
  },
  {
    id: 2,
    name: 'NIKE MERCURIAL 2020 ',
    imageUrls: ['../assets/images/product2/blue.jpg', '../assets/images/product2/black.jpg', '../assets/images/product2/red.jpg'],
    price: 8,
    flavors: [
      { name: 'blue', color: '#00CACA' },
      { name: 'black', color: '#000000' },
      { name: 'red', color: '#ff1a1a' },
    ],
    sizes: [Size.BONMUOI, Size.BONMOT, Size.BONHAI],
  },
  {
    id: 3,
    name: 'ADIDAS PREDATOR 20.3',
    imageUrls: ['../assets/images/product3/white.jpg', '../assets/images/product3/blue.jpg', '../assets/images/product3/black.jpg'],
    price: 8,
    flavors: [
      { name: 'white', color: '#ffb3b3' },
      { name: 'blue', color: '#0000ff' },
      { name: 'black', color: '#000000' },
    ],
    sizes: [Size.BONMUOI, Size.BONMOT, Size.BONHAI],
  },
  {
    id: 4,
    name: 'ATHLETA O-REI SUPER FLY',
    imageUrls: ['../assets/images/product4/white.jpg', '../assets/images/product4/green.jpg', ''],
    price: 8,
    flavors: [
      { name: 'white', color: '#ffb3b3' },
      { name: 'green', color: '#00ff40' },
      { name: 'xanh', color: '#E91E63' },
    ],
    sizes: [Size.BONMUOI, Size.BONMOT, Size.BONHAI],
  },
  {
    id: 5,
    name: 'ADIDAS X GHOSTED.3 SUPERSPEC',
    imageUrls: ['../assets/images/product5/white.jpg', '../assets/images/product5/yellow.jpg', '../assets/images/product5/pink.jpg'],
    price: 8,
    flavors: [
      { name: 'white', color: '#ffb3b3' },
      { name: 'yellow', color: '#F88532' },
      { name: 'pink', color: '#ff0080' },
    ],
    sizes: [Size.BONMUOI, Size.BONMOT, Size.BONHAI],
  },
];
