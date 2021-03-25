import { SetStateAction } from 'react'
import { Entity } from 'ts-lenses'
import { AppState } from '../../App/AppState'
import { Updater } from '../../App/AppTypes'
import { Product } from '../ProductOverview/Product/ProductTypes'

export type ShoppingCart = {
    products: ShoppingCartItem[]
    incrementItem?: Updater<ShoppingCartItem>
    decrementItem?: Updater<ShoppingCartItem>
    removeItem?: Updater<ShoppingCartItem>
}

export type ShoppingCartItem = {
    item: Product
    numberOfItems: number
}
