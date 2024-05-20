import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";
import {random} from "lodash";


const DataTable = (props) => {
    console.log(props.tableData)
    return (
        <Table className='mt-5' striped bordered hover variant='dark'>
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
    );
}

DataTable.propTypes = {
    tableData: PropTypes.object.isRequired,
}


export default DataTable;