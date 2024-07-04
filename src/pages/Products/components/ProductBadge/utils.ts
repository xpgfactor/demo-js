import { CategoryType } from 'src/types/products';

type BagdeTextMapType = Record<CategoryType | 'default', string>;

const BadgeTextMap: BagdeTextMapType = {
  beauty: 'beauty',
  groceries: 'groceries',
  laptops: 'laptops',
  motorcycle: 'motorcycle',
  'mens-watches': 'watches',
  'mobile-accessories': 'mobile',
  'kitchen-accessories': 'kitchen',
  'home-decoration': 'home',
  'mens-shirts': 'mens',
  'mens-shoes': 'shoes',
  default: 'goods',
};

export const getBadgeText = (category: CategoryType | 'default'): string =>
  BadgeTextMap[category] || 'goods';
