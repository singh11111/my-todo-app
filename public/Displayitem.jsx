import React from 'react';

function DisplayItem({ todoitem, todoDate,deleteclick }) {
    return (
        <div>
            <h3>{todoitem}</h3>
            <p>{todoDate}</p>
            <button onClick={() => deleteclick(todoitem)}>delete</button>
        </div>
    );
}

export default DisplayItem;

