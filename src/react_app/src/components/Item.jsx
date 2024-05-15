import React, {Component} from "react";

const Item =({task, onRemove}) => (
    <li>
        {task}
        <button onClick={onRemove}>Remove</button>
    </li>
);

export default Item;