import React from 'react';
import {Container} from 'react-bootstrap';
import Item from '../item'
//items will have title, price, and pictures.
var items = [
    {id:'1',title:'Beef Noodle',price:'6.75',source:'../images/phoFile.jpg'},
    {id:'2',title:'Chicken Noodle',price:'6.75', source: '../images/comThit.jpg'}
  ]; 
  
function Body(){
    return(
        const listItems = items.map((item)=>
        <Item title= item.title/>
        )
    )
}

export default Body;