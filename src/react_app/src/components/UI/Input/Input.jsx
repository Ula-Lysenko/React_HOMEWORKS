import React from "react";
import {Form} from "react-bootstrap";
import {random} from "lodash";
import PropTypes from "prop-types";

const Input = ({
                   label = null,
                   name = '',
                   type = 'text',
                   placeholder = 'enter something',
                   value = '',
                   onChange = (e) => {
                       console.log(e.target.value)
                   },
                   ...restProps
}) => {
    const controlId = 'form-input' + random(23, 998);

    return (
    <Form.Group className='mb-3' controlId={controlId}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete='off'
            {...restProps}
        />
    </Form.Group>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email', 'password']) ,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Input;
