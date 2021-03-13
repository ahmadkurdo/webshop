import React, { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Product } from "../Components/ProductOverview/Product/ProductTypes"
import { ProductOverview } from "../Components/ProductOverview/ProductOverview"
import { setProductOverView, setProducts, setSearchBarItems } from "../Components/ProductOverview/ProductOverviewUtils"
import { AppState } from "./AppState"
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
  
export const Router : React.FC<AppState> = (initialState : AppState) =>  {
    const [appState, setAppstate] = useState<AppState>(() => initialState)
    useEffect(() => {
        HttpGet<Product[]>('http://localhost:5000/products/1').then(response => {
        
        [setProducts, setSearchBarItems].map(setter => response.parsedBody != undefined && response.ok? setAppstate(setter((response.parsedBody))): undefined)
      
    })
    },[])
    
    return (        
        <Route path="/" render={()  => <ProductOverview {...appState.productOverviewState}/>}/>
    )
}
