import React from 'react';
import Displayitem from '../public/Displayitem';

function Display({ todoItem,deleteclick}) {
    if (!todoItem ||todoItem.length === 0) {
        return <div>Enjoy your day</div>;
      }
  return (
    <div>
      {todoItem.map((item, index) => (
        // Key is important for identifying elements uniquely in the list
        <Displayitem 
          key={index} 
          todoitem={item.name} 
          todoDate={item.date} 
          deleteclick ={deleteclick}
        />
      ))}
    </div>
  );
}

export default Display;



