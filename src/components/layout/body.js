import React from 'react';
import {Container} from 'react-bootstrap';
import Item from '../item';
import PhoFile from '../images/phoFile.jpg';
import ComThit from '../images/comThit.jpg';
//items will have title, price, and pictures.
var items = [
    {id:'1',title:'Beef Noodle',price:'6.75',source:PhoFile},
    {id:'2',title:'Chicken Noodle',price:'6.75', source: ComThit}
  ]; 
  
const Body = ()=>(
    <Container >   
    {
        items.map(item=>(
            <Item title = {item.title} source = {item.source} price={item.price}/>
        ))
    }
    </Container>
)

export default Body;