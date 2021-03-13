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
import { Grid } from '@material-ui/core';


export const ProductCard : React.FC<Product> = (props : Product) =>  {
 
  return (
  <Grid item xs={10} md={4}>
    <Card>
      <CardHeader title={props.name}/>
      <CardMedia image="https://oldnavy.gap.com/webcontent/0017/162/066/cn17162066.jpg" title="Paella dish"/>
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
  );
}




// body: Ruime, 3D zakken zijn voorop dit bomberjack geplaatst en hebben een verborgen klittenbandsluiting onder de klep. Langs de rits is een geweven tape geplaatst met een G-Star RAW reliëf print, waaronder een ritszak is verwerkt. Dit jack krijgt meer volume wanneer de banden in de taille worden aangetrokken.
// Header: ASOS DESIGN classic rigid jeans in black
//media" https://oldnavy.gap.com/webcontent/0017/162/066/cn17162066.jpg

// import React from 'react';
// import { Button, Icon, Item, Rating } from 'semantic-ui-react';
// import { Product } from './ProductTypes';

// export const ProductCard : React.FC<Product> = (props : Product) => {
//     return (
//             <Item>
//                 <Item.Image height="210" width="160" src= {props.image} />
//                 <Item.Content>
//                     <Item.Header as='a'>{props.name}</Item.Header>
//                     <Item.Meta>
//                     <span className='cinema'>{props.options?.map( options => options.name + '|')}</span>
//                     </Item.Meta>
//                     <Rating icon='star' defaultRating={3} maxRating={4} />
//                     <Item.Description>{props.description}</Item.Description>
//                     <Item.Extra>
//                         <Button primary floated='right'>
//                             <Icon name='add to cart' />
//                         </Button>
//                     </Item.Extra>
//                 </Item.Content>
//             </Item>
//     )
// }




