import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Carous from './carousel';

function Header(){
    return(
        <Container>
            <Row>
            <Col style={{marginBottom:'50px'}} xs={{  offset: 3}} md={{offset: 5}}>
                <h1 style={{marginLeft:'-50px'}}>Yume House Pho</h1>
            </Col>
            </Row>
            <Row>
                
                <Col style={{marginBottom:'50px'}} xs={{  offset: 3}} md={{offset: 5}}>
                    
                    <Button variant="outline-secondary">Home</Button>{' '}
                    <Button variant="outline-secondary">Order Now</Button>{' '}
                </Col>
                
            </Row>
            <Row>
                <Col xs={{  offset: 0}} md={{offset: 0}}>
                <Carous></Carous>
                </Col>
               
            </Row>
        </Container>
    );
}
export default Header;