import React from 'react';


class Progress extends React.Component {
    render() {
        const {percentage} = this.props;
        const max = 100;
        const width = (percentage/max) * 100;

        return (
            <div className="progress">
                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={percentage} aria-valuemin="0"
                     aria-valuemax={max} aria-label="progressbar" style={{width: `${width}%`}}>
                </div>
            </div>

        );
    }
}

export default Progress;