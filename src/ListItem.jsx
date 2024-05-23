import { useContext } from "react";
import TodosContext from "./context/TodosContext";

const ListItem = ({todo}) =>{

  const {deleteTodo,editTodo} = useContext(TodosContext);


    return(
        <>
          <li>
            <h2>{todo.text}</h2>
            <span>
              <button onClick={()=>editTodo(todo)}>Edit</button>
              <button id="delete" onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </span>
          </li>
        </>
    )
}
export default ListItem;