import React from 'react';
import {Card} from 'react-bootstrap';
function Item(props){
    return (
        <Card id ={props.id} style={{width: '18rem'}}>
            <Card.Img variant="top" src={require('./images/phoFile.jpg')}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Item;