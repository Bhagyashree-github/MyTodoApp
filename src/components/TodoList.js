import React from 'react'

function TodoList(props) {
   
  return (
    <div>
        <list className="list-item">
            {props.item}
       <span className='icons'>
       <i className="fa-solid fa-trash icon-delete" onClick={e =>props.deletevalue(props.value)}></i>
       </span>
       </list>
    </div>
  )
}

export default TodoList