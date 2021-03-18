import { SetStateAction } from "react"
import { Entity } from "ts-lenses"
import { Product } from "../Components/ProductOverview/Product/ProductTypes"
import { AppState, } from "./AppState"
import { Action, Async, Fun } from "./AppTypes"

export const makeFun = <input,output>(f:(_:input) => output) : Fun<input,output> => {
    let fun = f as Fun<input,output>
    fun.then = function<finalOutput>(this:Fun<input,output>, otherFunction:Fun<output,finalOutput>) : Fun<input,finalOutput> 
    {
      return makeFun(x => otherFunction(this(x)))
    
    }
    return fun
  }

export const setUpdater = makeFun<React.Dispatch<React.SetStateAction<AppState>>, SetStateAction<AppState>>((setState:React.Dispatch<React.SetStateAction<AppState>>) => (state: AppState) => Entity(state).set("updateAppState", uap => setState).commit())

export const updateSearchItems = makeFun<Action<Product[]>,SetStateAction<AppState>>((updateItems:Action<Product[]>) => 
(state : AppState) => Entity(state).setIn("headerState", 
povs => povs.setIn("searchbarState", sbs => 
sbs.set("items", p => state.productOverviewState.products.data !== 'loading' && state.productOverviewState.products.data !== 'failed'? updateItems(state.productOverviewState.products.data.data) : p))).commit())
export const filterProduct = makeFun<string,Action<Product[]>>((querystring:string) => (products: Product[]) =>  products.filter(product =>  product.name !== "" && product.name.includes(querystring)))
export const handelSearch = filterProduct.then(updateSearchItems)

export const addItemsToShoppingCart = makeFun<Product,SetStateAction<AppState>>((itemToAdd: Product) => (state: AppState) => Entity(state).setIn("headerState", hs => hs.set("shoppingCartItems", prev => prev + 1)).setIn("shoppingCart", sc => sc.set("products", p => p.concat(itemToAdd))).commit())
