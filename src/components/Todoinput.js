import React, { useState,useRef, useEffect} from 'react'
function Todoinput(props) {

    const [task,setTask] = useState("")
    const inputRef = useRef(null)
    useEffect(()=>{
      inputRef.current.focus()
    },[task])
    
  return (
    <div className='input-container'>
        <input 
        type="text" 
        ref={inputRef} 
        className="input-box-todo" 
        value={task} 
        placeholder="Enter your todo"
        onChange={ e=> {
          setTask(e.target.value)
        }}
        />

        <button className='add-btn' 
        onClick={()=>{
          props.addList(task)
          setTask("")
        }} >+</button>
    </div>
  )
}

export default Todoinput;