import React, {Component} from "react";

class LogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
        }
    }

    handleAddClick = () => {
        const lastValue = this.state.log.length > 0 ? this.state.log[0] : 0;
        const newValue = lastValue + 1;

        this.setState((prevState) => ({
            log: [newValue, ...prevState.log],
        }));
    }

    handleSubClick = () => {
        const lastValue = this.state.log.length > 0 ? this.state.log[0] : 0;
        const newValue = lastValue - 1;

        this.setState((prevState) => ({
            log: [newValue, ...prevState.log],
        }));

    }

    handleRemoveClick = (index) => {
        this.setState((prevState) => ({
            log: prevState.log.filter((_, i) => i !== index),
        }));
    }

    render() {

        return(
            <div>
                <div className='btn-group font-monospace' role='group'>
                    <button type='button' className='btn btn-outline-success' onClick={this.handleAddClick}>
                        +
                    </button>
                    <button type='button' className='btn btn-outline-danger' onClick={this.handleSubClick}>
                        -
                    </button>
                </div>
                <div className='list-group'>
                    {this.state.log.map((value, index) => (
                        <button key={index} type='button' className="list-group-item list-group-item-action" onClick={() => this.handleRemoveClick(index)} >
                            {value}
                        </button>
                    ))}
                </div>
            </div>

        );
    }
}

export default LogComponent;