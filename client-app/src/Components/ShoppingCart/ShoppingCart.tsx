import {
    Button,
    ButtonGroup,
    Grid,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import React from 'react'
import { AppHeader } from '../../App/AppHeader'
import { AppState } from '../../App/AppState'
import { Product } from '../ProductOverview/Product/ProductTypes'
import { ShoppingCart, ShoppingCartItem } from './ShoppingCartTypes'
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export const Cart: React.FC<AppState> = (props: AppState) => {
    const classes = useStyles()

    return (
        <>
            <AppHeader {...props.headerState} />
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Color</TableCell>
                            <TableCell align="center">size</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">QTY</TableCell>
                            <TableCell align="center">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderShoppingCartItems(props.shoppingCart)}</TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

const renderShoppingCartItems = (cart: ShoppingCart) =>
    cart.products.map((item) => (
        <TableRow key={item.item.id}>
            <TableCell component="th" scope="row">
                <img src={item.item.image} />
            </TableCell>
            <TableCell align="center">{item.item.name}</TableCell>
            <TableCell align="center">{item.item.description}</TableCell>
            <TableCell align="center">{item.item.price}</TableCell>
            <TableCell align="center">
                {item.numberOfItems}
                <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                    <Button onClick={ e => cart.incrementItem != undefined? cart.incrementItem(item): console.log("Increment item failed")}>+</Button>
                    <Button onClick={ e => cart.decrementItem != undefined? cart.decrementItem(item): console.log("Decrement item failed")}>-</Button>
                </ButtonGroup>
            </TableCell>
            <TableCell align="center">
                {item.item.description}
                <Button onClick={ e => cart.removeItem != undefined? cart.removeItem(item): console.log("Remove item failed")} variant="contained" color="secondary" startIcon={<ClearIcon />} />
            </TableCell>
        </TableRow>
    ))
