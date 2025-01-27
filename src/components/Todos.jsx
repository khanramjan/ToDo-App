import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
   
   
  return (
    <div>
      {
      props.todos.map(todo => (
        <Todo key={todo.id} id={todo.id} title={todo.title} desc={todo.desc} onRemoveTodo={props.onRemoveTodo} />

      ))
      }
    </div>
  )
}

export default Todos
