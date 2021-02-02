import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Container, Grid, Header, Item, Segment } from 'semantic-ui-react';
import { HttpGet } from '../Api/Api';
import { Async, Product, ProductOverviewState } from '../Types/Types';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
const panels = [
  {
    key: 'what-is-dog',
    title: 'What is a dog?',
    content: [
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
      'guest in many households across the world.',
    ].join(' '),
  },
  {
    key: 'kinds-of-dogs',
    title: 'What kinds of dogs are there?',
    content: [
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
      'that they find to be compatible with their own lifestyle and desires from a companion.',
    ].join(' '),
  },
  {
    key: 'acquire-dog',
    title: 'How do you acquire a dog?',
    content: {
      content: (
        <div>
          <p>
            Three common ways for a prospective owner to acquire a dog is from
            pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
        </div>
      ),
    },
  },
]


  



export const ProductOverview : React.FC<ProductOverviewState> = (props : ProductOverviewState) =>  {
    
    
    return (
      props.products.kind =="loaded" ? 
      <div>
      <Segment>
          <SearchBar  {...props.searchbarState}/>
        </Segment>

        <Container fluid>
          <Grid >
            <Grid.Column width={4} >
              <Segment>
              <Accordion fluid defaultActiveIndex={[0,1,2]} panels={panels} exclusive={false}/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment >
                {props.products.data != undefined ?
                <Item.Group divided>
                    {props.products.data.map(product => (<ProductCard key={product.id}  {...product}/>))}
                </Item.Group>
                : <p>Loading</p>}
              </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </div> : <p>loading</p>


    )
    
}