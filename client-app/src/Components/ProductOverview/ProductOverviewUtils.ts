import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../App/AppState'
import { makeFun } from '../../App/AppUtils'
import { Product } from './Product/ProductTypes'
import { ProductOverviewState } from './ProductOverviewState'

export const setProducts = makeFun<Product[], SetStateAction<AppState>>((newValue: Product[]) => (state: AppState) =>
    Entity(state)
        .setIn('productOverviewState', (p) =>
            p.setIn('products', (p) =>
                p.set('data', (_) => ({
                    status: 'loaded' as 'loaded',
                    data: newValue,
                }))
            )
        )
        .commit()
)
export const setProductOverView = makeFun<ProductOverviewState, SetStateAction<AppState>>(
    (newValue: ProductOverviewState) => (state: AppState) =>
        Entity(state)
            .set('productOverviewState', (p) => newValue)
            .commit()
)
export const setSearchBarItems = makeFun<Product[], SetStateAction<AppState>>(
    (newValue: Product[]) => (state: AppState) =>
        Entity(state)
            .setIn('headerState', (povs) => povs.setIn('searchbarState', (sbs) => sbs.set('items', (_) => newValue)))
            .commit()
)
