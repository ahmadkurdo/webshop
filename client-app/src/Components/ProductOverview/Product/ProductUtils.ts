import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../../App/AppState'
import { Fun } from '../../../App/AppUtils'
import { ShoppingCartItem } from '../../ShoppingCart/ShoppingCartTypes'
import { incrementNumberOfItems } from '../../ShoppingCart/ShoppingCartUtils'
import { Product } from './ProductTypes'

export const addItemsToShoppingCart = Fun<Product, SetStateAction<AppState>>(
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

export const createNewItem = (product: Product): ShoppingCartItem => ({ item: product, numberOfItems: 1 })

export const createShoppingCartItem = Fun<ShoppingCartItem[], Fun<Product, ShoppingCartItem>>((items) =>
    Fun((item) =>
        items.filter((sp) => sp.item.id === item.id)[0]
            ? items.filter((sp) => sp.item.id)[0]
            : { item: item, numberOfItems: 0 }
    )
)