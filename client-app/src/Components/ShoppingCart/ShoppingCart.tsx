import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { AppHeader } from '../../App/AppHeader'
import { AppState } from '../../App/AppState'
import { ShoppingCart } from './ShoppingCartTypes'

export const Cart: React.FC<AppState> = (props: AppState) => {
    return (
        <>
            <AppHeader {...props.headerState} />
            <Grid container spacing={3}  direction="column"  >
                <Grid item md={2}>
                    <Paper>My card</Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper>Items</Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper>Subtotal</Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper>Somebull shit about shipping</Paper>
                </Grid>
                <Grid item md={2}>
                    <Paper>Checkout</Paper>
                </Grid>

            </Grid>
            
        </>
    )
}
