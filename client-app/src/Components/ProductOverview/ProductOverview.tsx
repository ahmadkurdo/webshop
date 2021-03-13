import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppHeader from '../../App/AppHeader';
import { ProductCard } from './Product/ProductCard';
import { Product } from './Product/ProductTypes';
import { ProductOverviewState } from './ProductOverviewState';


export const renderProducts  = (p: Product) : JSX.Element =>  (<ProductCard {...p}/>)
export const ProductOverview : React.FC<ProductOverviewState> = (props : ProductOverviewState) =>  {
      
    return (
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <AppHeader/>
        </Grid>
        {props.products.data != "loading" && props.products.data != 'failed'? props.products.data.data.map( p => renderProducts(p)) :  <p>Loading</p>}
      </Grid>
    )
}