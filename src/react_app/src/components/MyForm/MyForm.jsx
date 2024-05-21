import {Component} from 'react';
import {cloneDeep} from "lodash";
import {Form, Button} from 'react-bootstrap';
import Input from "../UI/Input/Input.jsx";
import PropTypes from "prop-types";

const formInitState = {
    email: '',
    password: '',
    address: '',
    city: '',
    island: '',
    rules: 'off',
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.formData ? {...props.formData} : {...formInitState},
        }
    }

    handleChange = (e) => {
        const prevState = cloneDeep(this.state.formData);

        if (e.target.name === 'rules') {
            if (prevState[e.target.name] === 'on') {
                prevState[e.target.name] = 'off'
            } else {
                prevState[e.target.name] = 'on'
            }
        } else {
            prevState[e.target.name] = e.target.value;
        }
        this.setState({formData: prevState});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.formData);
        this.setState({formData: {...formInitState}})
    }

    render() {
        const {email, password, address, city, island, rules} = this.state.formData;

        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <h3 className='text-center'>My Form</h3>
                    <Input
                        label='Email'
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                    />

                    <Input
                        label='Password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                    />

                    <Input
                        label='Address'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        as='textarea'
                    />

                    <Input
                        label='City'
                        name='city'
                        value={city}
                        onChange={this.handleChange}
                    />

                    <Form.Select
                        className='mb-3'
                        name='island'
                        value={island}
                        onChange={this.handleChange}
                    >
                        <option>Open this menu</option>
                        <option value='Capri'>Capri</option>
                        <option value='Sicilia'>Sicilia</option>
                        <option value='Corsica'>Corsica</option>
                    </Form.Select>

                    <Form.Check
                        className='mb-3'
                        type='switch'
                        id='custom-switch'
                        label='Check this switch'
                        name='rules'
                        onChange={this.handleChange}
                    />

                    <Button type='submit'>Submit</Button>
                </Form>
            </>
        )
    }
}


MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object,
}

export default MyForm;