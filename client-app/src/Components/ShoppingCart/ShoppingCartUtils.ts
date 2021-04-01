import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../App/AppState'
import { Fun } from '../../App/AppUtils'
import { ShoppingCartItem } from './ShoppingCartTypes'

export const updateShoppingCartState = Fun<
    Fun<number, number>,
    Fun<Fun<ShoppingCartItem[], ShoppingCartItem[]>, Fun<AppState, AppState>>
>((f) =>
    Fun((g) =>
        Fun((state) =>
            Entity(state)
                .setIn('shoppingCart', (shc) => shc.set('products', g))
                .setIn('headerState', (shc) => shc.set('shoppingCartItems', f))
                .commit()
        )
    )
)

export const updateItem = Fun((f: Fun<ShoppingCartItem, ShoppingCartItem>) =>
    Fun<ShoppingCartItem[], ShoppingCartItem[]>((shc) => shc.map(f))
)

export const applyToItem = (updater: Fun<ShoppingCartItem, ShoppingCartItem>) =>
    Fun((newItem: ShoppingCartItem) =>
        Fun((oldItem: ShoppingCartItem) => {
            return oldItem.item.id === newItem.item.id ? updater(oldItem) : oldItem
        })
    )

export const updateNumberOfItems = (num: number) => applyToItem(Fun((item) => (item.numberOfItems <= 0 && num <= 0 ? item : { ...item, numberOfItems: item.numberOfItems + num })))

const deleteItem = Fun<ShoppingCartItem, Fun<ShoppingCartItem[], ShoppingCartItem[]>>((itemToRemove) =>
    Fun((currentItems) => currentItems.filter((item) => item.item.id !== itemToRemove.item.id))
)

export const updateItemBadge = Fun((num: number) => Fun<number, number>((x) => (x <= 0 && num <= 0 ? 0 : x + num)))

export const handleIncrement = Fun((item: ShoppingCartItem) =>
    updateNumberOfItems(1)
    .then(updateItem)
    .then(updateItemBadge
    .then(updateShoppingCartState)
    (1))
    (item))

export const handleDecrement = Fun((item: ShoppingCartItem) =>
    updateNumberOfItems(-1)
    .then(updateItem)
    .then(updateItemBadge
    .then(updateShoppingCartState)
    (-1))
    (item))

export const handledeleteItem = Fun((item: ShoppingCartItem) =>
    deleteItem
    .then(updateItemBadge
    .then(updateShoppingCartState)
    (-item.numberOfItems))
    (item))

export const calculateTotalCost = (cart: ShoppingCartItem[]): number =>
        cart.reduce((acc, cart) => {
            return acc + cart.numberOfItems * cart.item.price
        }, 0)
export const incrementNumberOfItems = Fun<ShoppingCartItem, ShoppingCartItem>((sp) => ({
    ...sp,
    numberOfItems: sp.numberOfItems + 1,
}))