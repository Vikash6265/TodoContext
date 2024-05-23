import { createContext, useState } from "react";

const TodosContext = createContext();


export const TodosProvider = ({children}) =>{

    const [todos,setTodo] = useState([
        // {
        //     id:1,
        //     text:"One",
        // },
        // {
        //     id:2,
        //     text:"Two",
        // },
        // {
        //     id:3,
        //     text:"Three",
        // },
        // {
        //     id:4,
        //     text:"Four",
        // }
    ]);

    const addTodo = (todo) =>{
        setTodo([todo,...todos])
    }

    const deleteTodo = (id) =>{
        setTodo(todos.filter(item => item.id !== id))
    }

    const [edit,setEdit] = useState({
        oldItem:{},
        isEdit:false,
    });

    const editTodo = (oldItem) =>{
        setEdit({
            oldItem:oldItem,
            isEdit:true,
        });
    };

    const updateTodo = (updatedTodo) =>{
        setTodo(
            todos.map((item) => item.id === updatedTodo.id ? updatedTodo : item)
        );

        setEdit({
            oldItem:{},
            isEdit:false,
        });
    }


    return(
        <TodosContext.Provider value={{todos,addTodo,deleteTodo,edit,editTodo,updateTodo}}>
            {children}
        </TodosContext.Provider>
    )
}


export default TodosContext;