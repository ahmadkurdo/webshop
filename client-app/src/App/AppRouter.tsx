import * as React from 'react'
import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Product } from '../Components/ProductOverview/Product/ProductTypes'
import { ProductOverview } from '../Components/ProductOverview/ProductOverview'
import { setProducts } from '../Components/ProductOverview/ProductOverviewUtils'
import { Cart } from '../Components/ShoppingCart/ShoppingCart'
import { HttpGet } from './AppApi'
import { AppHeader } from './AppHeader'
import { AppState, initialState } from './AppState'

export const Router: React.FC = () => {
    const [appState, setAppstate] = useState<AppState>(() => initialState())
    useEffect(() => {
        setAppstate(initialState(setAppstate))
        HttpGet<Product[]>('http://localhost:5000/products/1').then((response) => {
            [setProducts].map((setter) =>
                response.parsedBody != undefined && response.ok ? setAppstate(setter(response.parsedBody)) : undefined
            )
        })
    }, [])

    useEffect(() => {
        console.log(appState)
    })

    return appState.productOverviewState.products.data != 'loading' &&
        appState.productOverviewState.products.data != 'failed' ? (
        <Switch>
            <Route path="/" exact={true} render={() => <ProductOverview {...appState} />} />
            <Route path="/cart" exact={true} render={() => <Cart {...appState}/>} />
        </Switch>
        
    ) : (
        <p>loading</p>
    )
}

