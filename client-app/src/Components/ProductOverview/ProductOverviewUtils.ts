import { Entity } from "ts-lenses";
import { AppState } from "../../App/AppState";
import { Setter } from "../../App/AppTypes";
import { Product } from "./Product/ProductTypes";
import { ProductOverviewState } from "./ProductOverviewState";

export const setProductOverView: Setter<ProductOverviewState, AppState>  = 
(newValue:ProductOverviewState) => (prevState:AppState) =>   ({...prevState, productOverviewState: newValue})

export const setProducts : Setter<Product[],AppState> = (newValue : Product[]) => (state : AppState) => Entity(state).setIn("productOverviewState", p =>p.setIn("products", p => p.set("data", _ => newValue))).commit()
