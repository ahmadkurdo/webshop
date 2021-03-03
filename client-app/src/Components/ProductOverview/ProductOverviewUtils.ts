import { SetStateAction } from "react";
import { Entity } from "ts-lenses";
import { AppState } from "../../App/AppState";
import { Setter } from "../../App/AppTypes";
import { MakeCallable } from "../../App/AppUtils";
import { Product } from "./Product/ProductTypes";
import { ProductOverviewState } from "./ProductOverviewState";

export const setProductOverView: Setter<ProductOverviewState, AppState>  = 
(newValue:ProductOverviewState) => (prevState:AppState) =>   ({...prevState, productOverviewState: newValue})

export const setProducts = MakeCallable<Product[],SetStateAction<AppState>>((newValue : Product[]) => (state : AppState) => Entity(state).setIn("productOverviewState", p =>p.setIn("products", p => p.set("data", _ => newValue !== undefined? newValue: state.productOverviewState.products.data ))).commit())
