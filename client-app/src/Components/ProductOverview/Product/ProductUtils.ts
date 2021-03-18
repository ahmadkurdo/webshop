import { SetStateAction } from "react";
import { Entity } from "ts-lenses";
import { AppState } from "../../../App/AppState";
import { makeFun } from "../../../App/AppUtils";
import { Product } from "./ProductTypes";


export const addItemsToShoppingCart = makeFun<Product,SetStateAction<AppState>>((itemToAdd: Product) => (state: AppState) => Entity(state).setIn("headerState", hs => hs.set("shoppingCartItems", prev => prev + 1)).setIn("shoppingCart", sc => sc.set("products", p => p.concat(itemToAdd))).commit())
