export interface SalesRecord {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export type Tag = "Pantry" | "Obsolete" | "Blender" | "Lightning Deal";

export interface Inventory {
  products: Product[];
}

interface Review {
  customer: string;
  review: string;
  score: number;
}

interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: Review[];
  retailer: string;
  details: string[];
  tags: Tag[];
  sales: SalesRecord[];
}
