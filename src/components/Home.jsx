import React from 'react'
import Todos from './Todos'
import Newtodo from './Newtodo'
import { v4 as uuid } from 'uuid';

const Home = () => {

const RemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
}


    const [todos, setTodos] = React.useState([]);
    const AddTodo=(todo)=>{
        setTodos([...todos, { ...todo, id: uuid() }])
    }
return (
    <div className="">   
        <Newtodo onAddTodo={AddTodo}/>
        <Todos todos={todos} onRemoveTodo={RemoveTodo} />
       
    </div>
)
}

export default Home
