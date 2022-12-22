import { useState, React } from 'react';
import data from './data.json';
import Header from './Header';
import ToDoList from './ToDoList';
import 'bootstrap/dist/css/bootstrap.css';



import './App.css';

function App() {

  const [toDoList, setToDoList]= useState(data);
  const [newTask, setNewTask]= useState();
  const [showInput, setShowInput]= useState(false);
  const [editText, setEditText]= useState();
  const [toDoNumber, setToDoNumber]= useState();
  const [newToDoTask, setNewToDoTask]= useState();
  const [newText, setNewText]= useState();

  
  

  const handleComplete= (toDoId)=>{


    
    let mapped= toDoList.map(task =>{
    
      
      return task.id=== toDoId? 
      {...task, complete:!task.complete}: {...task}
       
    })
      setToDoList(mapped);
     
  }

  const editTask= (toDoId)=>{

    setShowInput(true);
    setToDoNumber(toDoId);
   
    toDoList.map(todo=>{
      
      if(todo.id===toDoId){
        console.log('this works somehow')
        console.log(todo.task);
        setEditText(todo.task);
      }
      
    })

  

   
  }

  const handleTextChange= (event)=>{
    setNewTask(event.target.value)
  }

  const changeTask= ()=>{
  
    let mapped = toDoList.map(todo=>{
      
        return todo.id===toDoNumber?
          {...todo, task: newTask}: {...todo}
        
       
     
    })
    setShowInput(false);
    setToDoList(mapped);
  }

  const deleteToDo= (toDoId)=>{
    let todos= [];
    toDoList.map(todo=>{
      
      if(todo.id!==toDoId){
        todos.push(todo);
      }
      
    })
    setToDoList(todos);
  }

  const handleNewTodo= (event)=>{
    event.preventDefault();
    
    setNewToDoTask(event.target.value);
    
  }

  const addToDo= ()=>{
    let numbers=[];

    toDoList.map(todo=>{
      numbers.push(todo.id)
    })

    const newToDo= {id: Math.max(...numbers)+1, task: newText, complete: false};

     const newToDoList= [...toDoList, newToDo]
    setToDoList(newToDoList);
    

    clearForm();
    


  }

  const clearForm= ()=>{
    setNewText('');
  }
  

  return (
    <div className="App" style={{backgroundColor: 'cyan'}} >
       <Header/>
       <ToDoList toDoList= {toDoList} handleComplete={handleComplete} editTask={editTask } deleteToDo={deleteToDo} />
       <div>{showInput && <h1>Edit Task</h1>}</div>
      <div>{showInput && 
      <>
      <input type= "text" defaultValue= {editText} onChange={handleTextChange}></input>
      <button className='btn btn-primary' onClick={changeTask}>Change</button>
      </>
      }
      
      </div>

<br/>
      <div>
        <h1>Add New To-Do</h1>
        <input type= "text" onChange={e=> setNewText(e.target.value)} value={newText} ></input>
        <button className='btn btn-success' onClick={addToDo}>Add</button>
      </div>
      
       
    </div>
   
  );
}

export default App;
