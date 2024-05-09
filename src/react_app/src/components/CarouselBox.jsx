import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CarouselBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };
    }

    handleSelect = (selectedIndex) => {
        this.setState({ activeIndex: selectedIndex });
    };

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <Carousel activeIndex={activeIndex} onSelect={this.handleSelect}>
                {images.map((imagePath, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block"
                            src={imagePath}
                            alt={`Slide ${index + 1}`}
                        />
                        <Carousel.Caption>
                            <h4>I wanna a little bit wine</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    }
}

export default CarouselBox;