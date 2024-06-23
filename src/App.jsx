import { useState } from 'react'
import Texta from './Texta'
import Display from './Display';

function App() {
  
  const [todoItem,formtodoitem ]=useState([]);
  const ondisplaychange = (adtodo,adddate) =>{
   const newtodoitem= [
      ...todoItem,{
        name:adtodo,
        date:adddate,
      }
    ]
    formtodoitem(newtodoitem);
    };
  const deletehandlec=(todoitem)=>{
    const Newtodoitem=  todoItem.filter(item => item.name !== todoitem );
  formtodoitem(Newtodoitem);
  };
  return (
    <>
   <h1>todo app</h1>
    <Texta ondisplaychange ={ondisplaychange}/>
    <Display todoItem={todoItem} deleteclick={deletehandlec}/>
    </>
  )
}

export default App;
