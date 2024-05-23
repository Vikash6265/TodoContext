import { useContext, useEffect, useState } from "react";
import TodosContext from "./context/TodosContext";

const Form = () =>{
 
  const {addTodo,edit,updateTodo} = useContext(TodosContext);

  const [text,setText] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    edit.isEdit
    ? updateTodo({
      id:edit.oldItem.id,
      text,
    })
    : addTodo({
      id:crypto.randomUUID(),
      text,
    });

    setText("");
  }

  useEffect(()=>{
    setText(edit.oldItem.text)
  },[edit])

    return(
        <>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Text here..." onChange={(e)=>setText(e.target.value)} value={text} required/>
          <button>Save</button>
        </form>
        </>
    )
}
export default Form;