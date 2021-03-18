import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Product } from './ProductTypes';
import { Box, Grid } from '@material-ui/core';
import CssBaseLine from '@material-ui/core'


export const ProductCard : React.FC<Product> = (props : Product) =>  {
 
  return (

    <>
    <Grid item xs={10} md={4}>
        <Card >
          <CardHeader title={props.name}/>
            <CardMedia image={props.image} title="Paella dish" style={{ height: 0 , paddingTop: '56.25%'}}/>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to shopping car">
              <AddShoppingCartIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>      
        </Card>
    </Grid>
    
    </>

  );
}




