import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

function Header(){
    return(
        <Container>
            <Row>
                
                <Col xs={{  offset: 3}} md={{offset: 5}}>
                    
                    <Button variant="outline-secondary">Home</Button>{' '}
                    <Button variant="outline-secondary">Order Now</Button>{' '}
                </Col>
                
            </Row>
        </Container>
    );
}
export default Header;