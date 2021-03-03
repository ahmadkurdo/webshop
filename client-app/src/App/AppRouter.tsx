import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Product } from "../Components/ProductOverview/Product/ProductTypes"
import { ProductOverview } from "../Components/ProductOverview/ProductOverview"
import { setProducts } from "../Components/ProductOverview/ProductOverviewUtils"
import { asynco } from "./AppApi"
import { AppState } from "./AppState"



export const Router : React.FC<AppState> = (initialState : AppState) =>  {
    const [appState, setAppstate] = useState<AppState>(() => initialState)
    useEffect(() => {
        [asynco<Product[],AppState>(setProducts , 'http://localhost:5000/products/1',setAppstate)].map(p => console.log(p))
    },[])
    return (        
        <Route path="/" render={()  => <ProductOverview {...appState.productOverviewState}/>}/>
    )
}
