import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { Product } from '../Components/ProductOverview/Product/ProductTypes'
import { AppState } from './AppState'
import { Action, Async } from './AppTypes'
import { useHistory } from 'react-router-dom'

export interface Fun<input, output> {
    (_: input): output
    then: <finalOutput>(otherFunction: Fun<output, finalOutput>) => Fun<input, finalOutput>
}

export let Fun = <input, output>(f: (_: input) => output): Fun<input, output> => {
    let fun = f as Fun<input, output>
    fun.then = function <finalOutput>(
        this: Fun<input, output>,
        otherFunction: Fun<output, finalOutput>
    ): Fun<input, finalOutput> {
        return Fun((x) => otherFunction(this(x)))
    }
    return fun
}

export const createUpdater = <T>(
    updater: Fun<T, SetStateAction<AppState>>,
    stateSetter: React.Dispatch<React.SetStateAction<AppState>>
) => (e: T) => stateSetter(updater(e))
export const setUpdater = Fun<React.Dispatch<React.SetStateAction<AppState>>, SetStateAction<AppState>>(
    (setState: React.Dispatch<React.SetStateAction<AppState>>) => (state: AppState) =>
        Entity(state)
            .set('updateAppState', (uap) => setState)
            .commit()
)
export const updateSearchItems = Fun<Action<Product[]>, SetStateAction<AppState>>(
    (updateItems: Action<Product[]>) => (state: AppState) =>
        Entity(state)
            .setIn('headerState', (povs) =>
                povs.setIn('searchbarState', (sbs) =>
                    sbs.set('items', (p) =>
                        state.productOverviewState.products.data !== 'loading' &&
                        state.productOverviewState.products.data !== 'failed'
                            ? updateItems(state.productOverviewState.products.data.data)
                            : p
                    )
                )
            )
            .commit()
)
export const filterProduct = Fun<string, Action<Product[]>>((querystring: string) => (products: Product[]) =>
    products.filter((product) => product.name !== '' && product.name.includes(querystring))
)
export const handelSearch = filterProduct.then(updateSearchItems)

export const goToCartPage = (browse: any) => browse.push("/cart")
