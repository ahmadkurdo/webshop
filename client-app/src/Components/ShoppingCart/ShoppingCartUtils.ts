import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../App/AppState'
import { Fun } from '../../App/AppUtils'
import { ShoppingCartItem } from './ShoppingCartTypes'

export const updateShoppingCartState = Fun<
    Fun<ShoppingCartItem[], ShoppingCartItem[]>,
    Fun<Fun<number, number>, Fun<AppState, AppState>>
>((f) =>
    Fun((g) =>
        Fun((state) =>
            Entity(state)
                .setIn('shoppingCart', (shc) => shc.set('products', f))
                .setIn('headerState', (shc) => shc.set('shoppingCartItems', g))
                .commit()
        )
    )
)

export const updateItem = Fun((f: Fun<ShoppingCartItem, ShoppingCartItem>) =>
    Fun<ShoppingCartItem[], ShoppingCartItem[]>((shc) => shc.map(f))
)
export const check = (updater: Fun<ShoppingCartItem, ShoppingCartItem>) =>
    Fun((newItem: ShoppingCartItem) =>
        Fun((oldItem: ShoppingCartItem) => {
            return oldItem.item.id === newItem.item.id ? updater(oldItem) : oldItem
        })
    )
export const updateNumberOfItems = (num: number) =>
    check(Fun((item) => (item.numberOfItems <= 0 ? item : { ...item, numberOfItems: item.numberOfItems + num })))

const deleteItem = Fun<ShoppingCartItem, Fun<ShoppingCartItem[], ShoppingCartItem[]>>((itemToRemove) =>
    Fun((currentItems) => currentItems.filter((item) => item.item.id !== itemToRemove.item.id))
)

export const updateItemBadge = (num: number) => Fun<number, number>((x) => (x <= 0 ? 0 : x + num))

export const handleIncrement = Fun((item: ShoppingCartItem) =>
    updateNumberOfItems(1)
    .then(updateItem)
    .then(updateShoppingCartState)(item)(updateItemBadge(1)))

export const handleDecrement = Fun((item: ShoppingCartItem) =>
    updateNumberOfItems(-1)
    .then(updateItem)
    .then(updateShoppingCartState)(item)(updateItemBadge(-1)))

export const handledeleteItem = Fun((item: ShoppingCartItem) =>
    deleteItem
    .then(updateShoppingCartState)(item)(updateItemBadge(-item.numberOfItems)))

export const incrementNumberOfItems = Fun<ShoppingCartItem, ShoppingCartItem>((sp) => ({
    ...sp,
    numberOfItems: sp.numberOfItems + 1,
}))

export const calculateTotalCost = (cart: ShoppingCartItem[]): number =>
    cart.reduce((acc, cart) => {
        return acc + cart.numberOfItems * cart.item.price
    }, 0)
