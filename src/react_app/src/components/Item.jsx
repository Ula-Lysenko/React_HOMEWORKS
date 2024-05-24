import React from "react";
import PropTypes from "prop-types";


const Item =({task, onRemove}) => (
    <>
        <li>
            {task}
            <hr/>
            <button type='button' className='btn btn-sm btn-outline-secondary' onClick={onRemove}>Remove</button>
        </li>
        <hr/>
        <hr/>
    </>
);


Item.propTypes = {
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};


export default Item;