import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AppHeader } from '../../App/AppHeader';
import { AppState } from '../../App/AppState';
import { handelSearch } from '../../App/AppUtils';
import { ProductCard } from './Product/ProductCard';
import { Product } from './Product/ProductTypes';
import { ProductOverviewState } from './ProductOverviewState';
//  const alert = (e: any) : any => alert(e)
export const renderProducts  = (p: Product) : JSX.Element =>  (<ProductCard {...p}/>)
export const ProductOverview : React.FC<AppState> = (props : AppState) =>  {
  
    return (
      props.productOverviewState.products.data != "loading" && props.productOverviewState.products.data != "failed"?
      <>
      <Grid  spacing={3}>
        <Grid item xs={12} md={12}>
          <AppHeader {...props.headerState}/>
        </Grid>
      </Grid>
      <Grid container   spacing={3} alignItems="center" justify="center" direction="row">
        { props.productOverviewState.products.data.data.map( p => renderProducts(p))} :  <p>Loading</p>
      </Grid>
      </> :
      <p>laoding</p>
    )
}

