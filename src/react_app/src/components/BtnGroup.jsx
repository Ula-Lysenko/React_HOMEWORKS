// import React from 'react';
// import classNames from "classnames";
//
// class BtnGroup extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             activeBtn: null,
//         };
//     }
//
//     handleBtnClick = (btnName) => {
//         this.setState({activeBtn: btnName});
//     }
//
//     render() {
//
//         const btnClass = classNames('btn',
//             'btn-success', {
//                 'left': this.state.activeBtn === 'left',
//                 'right': this.state.activeBtn === 'right'
//             });
//
//         return (
//             <div className="btn-group" role="group">
//                 <button type="button" className={btnClass} onClick={() => this.handleBtnClick('left')}>Left</button>
//                 <button type="button" className={btnClass} onClick={() => this.handleBtnClick ('right')}>Right</button>
//             </div>
//         )
//     }
// }
//
// export default BtnGroup;

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

        const btnClass = classNames('btn',
            'btn-success', {
                'left': this.state.activeBtn === 'left',
                'right': this.state.activeBtn === 'right'
            });

        return (
            <div className="btn-group" role="group">
                <button type="button" className={btnClass} onClick={() => this.handleBtnClick('left')}>Left</button>
                <button type="button" className={btnClass} onClick={() => this.handleBtnClick ('right')}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;
