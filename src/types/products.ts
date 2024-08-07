export enum Category {
  BEAUTY = 'beauty',
  GROCERIES = 'groceries',
  HOME_DECORATION = 'home-decoration',
  KITCHEN_ACCESSORIES = 'kitchen-accessories',
  LAPTOPS = 'laptops',
  MENS_SHIRTS = 'mens-shirts',
  MENS_SHOES = 'mens-shoes',
  MENS_WATCHES = 'mens-watches',
  MOBILE_ACCESSORIES = 'mobile-accessories',
  MOTORCYCLE = 'motorcycle',
}

type CategoryKeys = keyof typeof Category;
export type CategoryType = (typeof Category)[CategoryKeys];

export interface Product {
  id: number;
  title: string;
  description: string;
  category: CategoryType;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductsResponse {
  products: Partial<Product>[];
  total: number;
  skip: number;
  limit: number;
}
