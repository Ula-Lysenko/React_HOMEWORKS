import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class CardBox extends Component {
    render() {
        const {title, text} = this.props;

        return (
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardBox;