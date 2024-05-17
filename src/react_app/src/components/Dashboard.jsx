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
                    className="modal-open-button btn btn-warning"
                    onClick={this.toggleModal}
                >
                    Open Modal
                </button>
                <Modal isOpen={this.state.modal} onClose={this.toggleModal} title='Baby Lasagna'>
                    <p>Meow, cat, please, meow back.</p>
                    <p>Don’t cry, just dance.</p>
                    <p>Rim-tim-tagi-digi-dim-tim-tim!</p>
                </Modal>
            </div>
        );
    }
}

export default Dashboard;