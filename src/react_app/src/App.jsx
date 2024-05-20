import {Component} from "react";
import MyForm from "./components/MyForm/MyForm.jsx";
import {Container} from "react-bootstrap";
import {cloneDeep} from "lodash";
import DataTable from "./components/DataTable/DataTable.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    onSubmitHandler = (formData) => {
      const formDataCopy = cloneDeep(formData);
      this.setState({data: formDataCopy})
    }

    render() {

        return (
            <Container>
                <MyForm onSubmit={this.onSubmitHandler}/>
                {this.state.data && <DataTable tableData={this.state.data}/>}
            </Container>
        )
    }

}

export default App
