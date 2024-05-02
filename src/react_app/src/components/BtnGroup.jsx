import React from 'react';
import classNames from "classnames";

class BtnGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeBtn: null,
        };
    }

    handleBtnClick = (btnName) => {
        this.setState({activeBtn: btnName});
    }

    render() {

        const btnClassLeft = classNames('btn',
                'btn-outline-warning', {
                active: this.state.activeBtn === 'left',
            });

        const btnClassRight = classNames('btn',
                'btn-outline-warning', {
                active: this.state.activeBtn === 'right'
            });

        return (
            <div className="btn-group" role="group">
                <button type="button" className={btnClassLeft} onClick={() => this.handleBtnClick('left')}>Left</button>
                <button type="button" className={btnClassRight} onClick={() => this.handleBtnClick ('right')}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;
