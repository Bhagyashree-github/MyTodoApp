import { useState} from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import "./App.css"


function App() {
 const [listItems, setListItem] = useState([]);
 let addList = (task)=>{
  if(task !==""){
    setListItem([...listItems,task])
  }
  
 }
 const deleteItem = (value) =>{
  let newList = [...listItems]
  newList.splice(value,1)
  setListItem([...newList])
}
  return (
    <div className="main-container">
     <div className="center-container">
     <h2 className='app-heading'>Todo App</h2>
     
     <Todoinput addList={addList}/>
      <hr />
      <div>
      {listItems.map( (listItem,index)=> {return (<TodoList key={index} value={index} deletevalue ={deleteItem} item={listItem}/>)  })}
      </div>
     
     </div>
     
    </div>
  );
}

export default App;

