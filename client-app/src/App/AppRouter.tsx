import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Product } from "../Components/ProductOverview/Product/ProductTypes"
import { ProductOverview } from "../Components/ProductOverview/ProductOverview"
import { setProductOverView } from "../Components/ProductOverview/ProductOverviewUtils"
import {Entity} from 'ts-lenses'
import { asynco, HttpGet } from "./AppApi"
import { AppState } from "./AppState"
import { Action, ApiState } from "./AppTypes"
import { MakeCallable } from "./AppUtils"


const unit = MakeCallable<ApiState<Product[]>,Action<AppState>>((newValue : ApiState<Product[]>) => (state : AppState) => 
Entity(state).setIn("productOverviewState", p =>p.setIn("products", p => p.set("data", _ => newValue.data !== undefined? newValue.data : state.productOverviewState.products.data ))).commit())



const x = asynco<Product[],AppState>(unit , '')
export const Router : React.FC<AppState> = (initialState : AppState) =>  {
    const [appState, setAppstate] = useState<AppState>(() => initialState)
    useEffect(() => {
        [asynco<Product[],AppState>(unit , 'http://localhost:5000/products/1')].map(setter => setAppstate(setter))

    },[])
    return (

        <Route path="/" render={()  => <ProductOverview {...appState.productOverviewState}/>}/>
    )
}
