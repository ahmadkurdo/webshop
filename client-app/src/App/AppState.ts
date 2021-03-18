import { SetStateAction } from "react";
import { Product } from "../Components/ProductOverview/Product/ProductTypes";
import { ProductOverviewState } from "../Components/ProductOverview/ProductOverviewState";
import { SearchBarState } from "../Components/ProductOverview/SearchBar/SearchBarState";
import { ShoppingCart } from "../Components/ShoppingCart/ShoppingCartTypes";
import { Fun } from "./AppTypes";
import { handelSearch, makeFun } from "./AppUtils";

export interface AppState{
    headerState : HeaderState
    productOverviewState : ProductOverviewState
    updateAppState?: React.Dispatch<React.SetStateAction<AppState>>
    shoppingCart : ShoppingCart
    
    
  }
// const createUdater = makeFun<Fun<string, SetStateAction<AppState>>, Fun<string, void>>()
const createUpdater = <T>(updater:Fun<T,SetStateAction<AppState>>, stateSetter: React.Dispatch<React.SetStateAction<AppState>>) => (e:T) => stateSetter(updater(e))
export interface HeaderState {
          shoppingCartItems: number
          recievedMessages: number
          searchbarState : SearchBarState<Product[], string>

        
         }

export const initialState = (stateSetter?:React.Dispatch<React.SetStateAction<AppState>>): AppState => (
    {    productOverviewState : {
           products : {data:'loading'},
       
          },
          headerState : {
            shoppingCartItems: 0, 
            recievedMessages: 0,
            searchbarState : {
            loading : false,
            results : [],
            value : '',
            items : [],
            updateItems: stateSetter? createUpdater(handelSearch, stateSetter) : undefined
          }          
        },

        shoppingCart: {
          products : []
        }

        
       })


