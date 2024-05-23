import { useContext } from "react";
import ListItem from "./ListItem";
import TodosContext from "./context/TodosContext";

const ListGroup = () =>{

    const {todos} = useContext(TodosContext)

    if(todos.length === 0){
        return <h2 style={{textAlign:'center',paddingTop:'50px',fontSize:'20px'}}>No Data Yet !</h2>
    }

    return(
        <>
        <ul>    
           {
            todos.map((todo)=><ListItem key={todo.id} todo={todo}/> )
           }


        </ul>
        </>
    )
}
export default ListGroup;