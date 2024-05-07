import React from "react";

class Collapse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened || true
        };
    }

    handlerCollapse = () => {
        this.setState((prevState) => ({
            opened: !prevState.opened,
        }));
    }

    render() {
        const {text} = this.props;
        const {opened} = this.state;
        const collapseClass = `collapse ${opened ? 'show' : ''}`;

        return (
            <div>
                <p>
                    <a className="btn btn-success"
                       data-bs-toggle="collapse"
                       href="#" role="button"
                       aria-expanded={opened}
                       onClick={this.handlerCollapse}>Link with TRUE</a>
                </p>
                <div className={collapseClass}>
                        <div className="card card-body">
                        {text}
                        </div>
                </div>
            </div>
        )
    }
}

export default Collapse;