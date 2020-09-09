import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carous() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/phoFile.jpg")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/comThit.jpg")}
                    alt="Second Slide"
                />
                <Carousel.Caption>
                    <h3>Grilled Pork over Rice</h3>
                    <p>House Special Rice Dish</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require("../images/mango.jpg")}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Mango Smoothie</h3>
                    <p>Fresh Mango Smoothie</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}
export default Carous;