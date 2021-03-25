import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../App/AppState'
import { Action, Fun } from '../../App/AppTypes'
import { makeFun } from '../../App/AppUtils'
import { ShoppingCartItem } from './ShoppingCartTypes'

export const updateShoppingCartItemState = makeFun<
    Fun<ShoppingCartItem[], ShoppingCartItem[]>,
    Fun<Fun<number, number>, SetStateAction<AppState>>
>((shoppingCartItemsCallBack: Fun<ShoppingCartItem[], ShoppingCartItem[]>) =>
    makeFun((shoppingCartBadgecallback: Fun<number, number>) =>
        makeFun<AppState, AppState>((state: AppState) =>
            Entity(state)
                .setIn('headerState', (hs) => hs.set('shoppingCartItems', shoppingCartBadgecallback))
                .setIn('shoppingCart', (shc) => shc.set('products', shoppingCartItemsCallBack))
                .commit()
        )
    )
)

const changeItemValue = makeFun<
    Action<ShoppingCartItem>,
    Fun<ShoppingCartItem, Fun<ShoppingCartItem[], ShoppingCartItem[]>>
>((callBack) =>
    makeFun<ShoppingCartItem, Fun<ShoppingCartItem[], ShoppingCartItem[]>>((currentItem) =>
        makeFun<ShoppingCartItem[], ShoppingCartItem[]>((currentItems) =>
            currentItems.map((item) => (item.item.id === currentItem.item.id ? callBack(item) : item))
        )
    )
)

export const deleteItem = makeFun<ShoppingCartItem, Fun<ShoppingCartItem[], ShoppingCartItem[]>>((itemToRemove) =>
    makeFun<ShoppingCartItem[], ShoppingCartItem[]>((items) =>
        items.filter((item) => item.item.id !== itemToRemove.item.id)
    )
)
export const incrementNumberOfItems = makeFun<ShoppingCartItem, ShoppingCartItem>((sp) => ({
    ...sp,
    numberOfItems: sp.numberOfItems + 1,
}))

export const decrementNumberOfItems = makeFun<ShoppingCartItem, ShoppingCartItem>((sp) => ({
    ...sp,
    numberOfItems: sp.numberOfItems <= 0 ? 0 : sp.numberOfItems - 1,
}))
const increment = makeFun<number, number>((x) => x + 1)

const decrement = makeFun<number, number>((x) => (x <= 0 ? 0 : x - 1))

const decrementNum = (num: number) => makeFun<number, number>((x) => x - num)

export const handleIncrement = makeFun<ShoppingCartItem, SetStateAction<AppState>>((item) =>
    changeItemValue(incrementNumberOfItems).then(updateShoppingCartItemState)(item)(increment)
)

export const handleDecrement = makeFun<ShoppingCartItem, SetStateAction<AppState>>((item) =>
    changeItemValue(decrementNumberOfItems).then(updateShoppingCartItemState)(item)(decrement)
)

export const handleRemove = makeFun<ShoppingCartItem, SetStateAction<AppState>>((item) =>
    deleteItem.then(updateShoppingCartItemState)(item)(decrementNum(item.numberOfItems))
)

export const calculateTotalCost = (cart: ShoppingCartItem[]): number =>
    cart.reduce((acc, cart) => {
        return acc + cart.numberOfItems * cart.item.price
    }, 0)
