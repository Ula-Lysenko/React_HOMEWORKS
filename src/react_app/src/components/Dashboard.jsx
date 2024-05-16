import React, { Component } from 'react';

import Modal from './Modal.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };

    render() {
        return (
            <div>
                <button
                    type="button"
                    className="modal-open-button btn btn-danger"
                    onClick={this.toggleModal}
                >
                    Open
                </button>
                <Modal isOpen={this.state.modal} onClose={this.toggleModal}>
                    <div>
                        Type Conversions
                        Basic operators, maths
                        Comparisons
                        Conditional branching: if, '?'
                        Logical operators
                        Nullish coalescing operator '??'
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Dashboard;