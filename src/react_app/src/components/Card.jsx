import React from 'react';

class Card extends React.Component {
    render() {
        const {title, text} = this.props;

        if (!title && !text) {
            return null;
        }

        return (
            <div className="card">
                <div className="card-body">
                    { title && <h4 className="card-title">{title}</h4>}
                    { text && <p className="card-text">{text}</p>}
                </div>
            </div>

        );
    }
}

export default Card;
