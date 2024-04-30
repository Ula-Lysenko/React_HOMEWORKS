import React from "react";

class ListGroup extends React.Component {
    render() {
        const {children} = this.props

        return (
            <div className='container'>
                <div className='row'>
                    <ul className="list-group">
                        {children}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListGroup;
