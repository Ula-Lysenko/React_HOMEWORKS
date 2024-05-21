import React from "react";
import PropTypes from "prop-types";
import {Button, Table} from "react-bootstrap";
import {random} from "lodash";


const DataTable = (props) => {
    console.log(props.tableData)
    return (
        <div className='mt-5'>
            <Table className='mb-5' striped bordered hover variant='dark'>
                <tbody>
                {Object.keys(props.tableData).map(item => {
                    return(
                        <tr key={random(56, 1298)}>
                            <td>{item}</td>
                            <td>{props.tableData[item]}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Button onClick={props.onClickBack}>Go Back</Button>
        </div>
    );
}

DataTable.propTypes = {
    tableData: PropTypes.object.isRequired,
    onClickBack: PropTypes.func.isRequired,
}


export default DataTable;