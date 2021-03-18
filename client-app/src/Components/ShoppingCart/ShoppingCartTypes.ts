import { Product } from "../ProductOverview/Product/ProductTypes";

export type ShoppingCart = {
  products: Product[];
  // : number
};

export type ShoppingCartItems = {
  item: Product;
  numberOfItems: number;
};
