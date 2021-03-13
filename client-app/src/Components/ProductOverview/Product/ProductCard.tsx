import React from 'react';
import { Button, Icon, Item, Rating } from 'semantic-ui-react';
import { Product } from './ProductTypes';

export const ProductCard : React.FC<Product> = (props : Product) => {
    return (
            <Item>
                <Item.Image height="210" width="160" src= {props.image} />
                <Item.Content>
                    <Item.Header as='a'>{props.name}</Item.Header>
                    <Item.Meta>
                    <span className='cinema'>{props.options?.map( options => options.name + '|')}</span>
                    </Item.Meta>
                    <Rating icon='star' defaultRating={3} maxRating={4} />
                    <Item.Description>{props.description}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            <Icon name='add to cart' />
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
    )
}