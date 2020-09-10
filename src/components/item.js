import React from 'react';
import {Card} from 'react-bootstrap';
function Item(props){
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={require(props.source)}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Item;