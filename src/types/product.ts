export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  shortDescription?: string;
  specifications: {
    label: string;
    value: string;
  }[];
  variants?: {
    id: string;
    name: string;
    price: number;
  }[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}
