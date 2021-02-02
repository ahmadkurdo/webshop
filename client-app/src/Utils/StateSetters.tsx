import { AppState, Product, ProductOverviewState,SearchBarState,Setter } from "../Types/Types";


export const setProductOverView: Setter<ProductOverviewState, AppState>  = 
(newValue:ProductOverviewState) => (prevState:AppState) =>   ({...prevState, productOverviewState: newValue})

export const setSearchBarState: Setter<SearchBarState<Product[]>, AppState>  = 
(newValue:SearchBarState<Product[]>) => (prevState:AppState) =>   ({...prevState, searchbarState: newValue})