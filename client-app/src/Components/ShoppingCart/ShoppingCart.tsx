import React from 'react'
import { AppHeader } from '../../App/AppHeader'
import { AppState } from '../../App/AppState'
import { ShoppingCart } from './ShoppingCartTypes'

export const Cart: React.FC<AppState> = (props: AppState) => {
    return (
        <>
            <AppHeader {...props.headerState} />
            <p>SHOPPING CART COMING SOON</p>
        </>
    )
}
