import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../../App/AppState'
import { Fun } from '../../../App/AppTypes'
import { makeFun } from '../../../App/AppUtils'
import { ShoppingCartItem } from '../../ShoppingCart/ShoppingCartTypes'
import { Product } from './ProductTypes'

export const addItemsToShoppingCart = makeFun<Product, SetStateAction<AppState>>(
    (itemToAdd: Product) => (state: AppState) =>
        Entity(state)
            .setIn('headerState', (hs) => hs.set('shoppingCartItems', (prev) => prev + 1))
            .setIn('shoppingCart', (shc) =>
                shc.set('products', (p) =>
                    p.find((items) => items.item.id === itemToAdd.id)
                        ? p.map((items) => (items.item.id == itemToAdd.id ? incrementNumberOfItems(items) : items))
                        : p.concat(createNewItem(itemToAdd))
                )
            )
            .commit()
)

const createNewItem = (product: Product): ShoppingCartItem => ({ item: product, numberOfItems: 1 })
const incrementNumberOfItems = makeFun<ShoppingCartItem, ShoppingCartItem>((sp) => ({
    ...sp,
    numberOfItems: sp.numberOfItems + 1,
}))
export const createShoppingCartItem = makeFun<ShoppingCartItem[], Fun<Product, ShoppingCartItem>>((items) =>
    makeFun((item) =>
        items.filter((sp) => sp.item.id === item.id)[0]
            ? items.filter((sp) => sp.item.id)[0]
            : { item: item, numberOfItems: 0 }
    )
)
