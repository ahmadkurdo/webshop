import { SetStateAction } from 'react'
import { Product } from '../Components/ProductOverview/Product/ProductTypes'
import { ProductOverviewState } from '../Components/ProductOverview/ProductOverviewState'
import { SearchBarState } from '../Components/ProductOverview/SearchBar/SearchBarState'
import { ShoppingCart } from '../Components/ShoppingCart/ShoppingCartTypes'
import { Fun } from './AppTypes'
import { handelSearch } from './AppUtils'
import { addItemsToShoppingCart } from '../Components/ProductOverview/Product/ProductUtils'
import {handleIncrement,handleDecrement,handledeleteItem} from '../Components/ShoppingCart/ShoppingCartUtils'
export interface AppState {
    headerState: HeaderState
    productOverviewState: ProductOverviewState
    updateAppState?: React.Dispatch<React.SetStateAction<AppState>>
    shoppingCart: ShoppingCart
}

export interface HeaderState {
    shoppingCartItems: number
    recievedMessages: number
    searchbarState: SearchBarState<Product[], string>
}
const createUpdater = <T>(
    updater: Fun<T, SetStateAction<AppState>>,
    stateSetter: React.Dispatch<React.SetStateAction<AppState>>
) => (e: T) => stateSetter(updater(e))

export const initialState = (stateSetter?: React.Dispatch<React.SetStateAction<AppState>>): AppState => ({
    productOverviewState: {
        products: { data: 'loading' },
        addToCart: stateSetter ? createUpdater(addItemsToShoppingCart, stateSetter) : undefined,
    },
    headerState: {
        shoppingCartItems: 0,
        recievedMessages: 0,
        searchbarState: {
            loading: false,
            results: [],
            value: '',
            items: [],
            updateItems: stateSetter ? createUpdater(handelSearch, stateSetter) : undefined,
        },
    },

    shoppingCart: {
        products: [],
        incrementItem: stateSetter ? createUpdater(handleIncrement, stateSetter) : undefined ,
        decrementItem: stateSetter ? createUpdater(handleDecrement, stateSetter) : undefined ,
        removeItem: stateSetter ? createUpdater(handledeleteItem, stateSetter) : undefined ,

    },
})
