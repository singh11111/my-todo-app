import React, { useState,useRef } from 'react'

function Texta({ondisplaychange}) {
  const todoelement=useRef();
  const duedate=useRef();
  //   const[adtodo,settodo]=useState();
  //   const handleTextChange = (event) => {
  //       settodo(event.target.value);
  //     };
  //     const[adddate,setdate]=useState();
  // const ondatechange= (event) =>{
  //   setdate(event.target.value);
  // }
  const dispir=() => {

    ondisplaychange(todoelement.current.value,duedate.current.value);
   todoelement.current.value="";
   
  }
  return (
    <>
    <div>
        <input  ref={todoelement} placeholder='THE KING'/>
    </div>
     <div>
     <input className='date'
     ref={duedate}
     
       type="date"
       id="date"
       name="date"
     />
   </div>
   <button  onClick={dispir} className='btn-add' >Add</button>
   </>
  )
}

export default Texta;
