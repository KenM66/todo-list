import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleComplete, editTask, deleteToDo }) => {

  


   return(
    <div style={{display: 'flex', justifyContent:'center', color: 'white', backgroundColor: 'black'}}>
        <table style={{border: '1px solid green', borderCollapse: 'collapse'}} >
            <tr style={{border: '1px solid green', borderCollapse: 'collapse'}}> <th>Task</th></tr>
           {toDoList.map((todo)=>{
                return(
                    <tr style={{border: '1px solid green', borderCollapse: 'collapse'}}>
                        {!todo.complete &&
                        <td style={{border: '1px solid green', borderCollapse: 'collapse', display: 'flex', justifyContent: 'start' }}> <ToDo todo= {todo}/> </td>}
                        {todo.complete &&
                        <td style={{border: '1px solid green', borderCollapse: 'collapse', display: 'flex', justifyContent: 'start', color: 'red', textDecoration: 'line-through' }}><ToDo todo= {todo}/> </td>}
                        {!todo.complete && <td><button className="btn btn-success" onClick={()=>handleComplete(todo.id)}>Complete</button> </td>}
                        {todo.complete && <td><button className="btn btn-warning" onClick={()=>handleComplete(todo.id)}>Un-Complete</button> </td>}
                        <td><button className="btn btn-primary" onClick={()=>editTask(todo.id)}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteToDo(todo.id)}>Delete</button></td>
                    </tr>
                )
           })}
           

        </table>
    </div>
   )
};

export default ToDoList;
