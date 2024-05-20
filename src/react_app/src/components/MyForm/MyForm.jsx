import {Component} from 'react';
import {cloneDeep} from "lodash";
import {Form} from 'react-bootstrap';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
            }

        }
    }

    render() {

        return (
            <>
                <Form>
                    <Form.Group className='mb-3' controlId='formaBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='email' placeholder='enter email'/>
                        <Form.Text className='text-muted'>
                            We`ll never share your email with anyone else.</Form.Text>
                    </Form.Group></Form>

            </>
        )
    }
}

export default MyForm;