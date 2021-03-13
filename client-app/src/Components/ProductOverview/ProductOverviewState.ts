import { Async, Fun } from "../../App/AppTypes";
import { Product } from "./Product/ProductTypes";
import { SearchBarState } from "./SearchBar/SearchBarState";

export interface ProductOverviewState{
    products : Async<Product[]>
    searchbarState : SearchBarState<Product[]>
}
