import React from "react";

const Item =({task, onRemove}) => (
    <li>
        {task}
        <hr/>
        <button type='button' className='btn btn-sm btn-outline-secondary' onClick={onRemove}>Remove</button>
    </li>
);

export default Item;