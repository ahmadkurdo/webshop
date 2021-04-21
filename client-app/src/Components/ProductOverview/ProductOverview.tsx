import { Grid } from '@material-ui/core'
import * as React from 'react'
import { AppHeader } from '../../App/AppHeader'
import { AppState } from '../../App/AppState'
import { Updater } from '../../App/AppTypes'
import { ProductCard } from './Product/ProductCard'
import { Product } from './Product/ProductTypes'
import Loader from 'react-loader-spinner'

export const renderProducts = (p: Product, e?: Updater<Product>): JSX.Element => (
    <ProductCard product={p} addToCart={e} />
)
export const ProductOverview: React.FC<AppState> = (props: AppState) => {
    return props.productOverviewState.products.data != 'loading' &&
        props.productOverviewState.products.data != 'failed' &&
        props.productOverviewState.addToCart !== undefined ? (
        <>
            <Grid spacing={3}>
                <Grid item xs={12} md={12}>
                    <AppHeader {...props.headerState} />
                </Grid>
            </Grid>
            <Grid container spacing={3} alignItems="center" justify="center" direction="row">
                {props.productOverviewState.products.data.data.map((p) =>
                    renderProducts(p, props.productOverviewState.addToCart)
                )}
            </Grid>
        </>
    ) : (
        <Loader type="Oval" color="#dedede" radius={40} />
    )
}
