import React, { useEffect, useState } from 'react';
import { Dimmer, Header, Loader, Segment, Image } from 'semantic-ui-react'
import { HttpGet } from '../Api/Api';
import { ProductCard } from '../Components/ProductCard';
import { ProductOverview } from '../Components/ProductOverview';
import { AppState, Async, Product, ProductOverviewState } from '../Types/Types';
import { setProductOverView, setSearchBarState } from '../Utils/StateSetters';

const initialState : AppState = {
  productOverviewState : {
    products : {data:[] , kind:'loading'},

    searchbarState : {
    loading : false,
    results : [],
    value : '',
    items : []
  }
},

} 

export function App() {
  const [appState, setAppstate] = useState<AppState>(initialState)
  useEffect(() => {
      HttpGet<Product[]>('http://localhost:5000/products/1').then(response => {
    if(response.parsedBody != undefined){
      [setProductOverView({products: {data: response.parsedBody, kind: 'loaded'}, 
      searchbarState: {...appState.productOverviewState.searchbarState, items: response.parsedBody}})

    ].map(setter => setAppstate(setter))
    }
  })
  },[])
  
  return (
    <div >
        <ProductOverview {...appState.productOverviewState}/>
    </div>
  );
}

export default App;
