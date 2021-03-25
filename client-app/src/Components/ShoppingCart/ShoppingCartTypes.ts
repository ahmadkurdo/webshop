import { Product } from "../ProductOverview/Product/ProductTypes";

export type ShoppingCart = {
  products: ShoppingCartItem[];
  // : number
};

export type ShoppingCartItem = {
  item: Product;
  numberOfItems: number;
};
