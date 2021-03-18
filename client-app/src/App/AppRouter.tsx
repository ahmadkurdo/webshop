import * as React from 'react'
import  { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Product } from "../Components/ProductOverview/Product/ProductTypes"
import { ProductOverview } from "../Components/ProductOverview/ProductOverview"
import { setProductOverView, setProducts, setSearchBarItems } from "../Components/ProductOverview/ProductOverviewUtils"
import { AppHeader } from "./AppHeader"
import { AppState, initialState } from "./AppState"
import { handelSearch } from "./AppUtils"
// import { setUpdater } from "./AppUtils"
export async function HttpGet<T>(
    request: RequestInfo
  ): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
      request
    );
    response.parsedBody = await response.json();
    return response;
  }
  export interface HttpResponse<T> extends Response {
    parsedBody?: T;
  }
  
export const Router : React.FC = () =>  {
    const [appState, setAppstate] = useState<AppState>(() => initialState())
    useEffect(() => {
        setAppstate(initialState(setAppstate))
        HttpGet<Product[]>('http://localhost:5000/products/1').then(response => { 
        [setProducts].map(setter => response.parsedBody != undefined && response.ok? setAppstate(setter((response.parsedBody))): undefined)
        
    })
    },[])

    useEffect(() => {
      console.log(appState)      
  })
    
    return (       
      appState.productOverviewState.products.data != "loading" && appState.productOverviewState.products.data != "failed"? 
        <Route path="/" render={()  => <ProductOverview {...appState}/>}/> : <p>loading</p>        
    )
}
