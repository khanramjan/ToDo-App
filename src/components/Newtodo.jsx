import React from 'react'

const Newtodo = (props) => {
    const [todo, setTodo] = React.useState({title:'',desc:''});
    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }
        const handleSubmit = (e) => {
            e.preventDefault();
            props.onAddTodo(todo);
        }
    
return (
    <div className="flex justify-center mt-2 mb-4">
        <form className='bg-white shadow-md rounded max-w-lg w-full' onSubmit={handleSubmit}>
            <div className='p-2'>
                <label htmlFor="name" className=' text-gray-700 text-sm font-bold mb-2'>Name: </label>
                <input type="text" id="title" name="title" className='bg-gray-200 mb-2 w-full p-2' value={todo.title} onChange={handleChange} />
            </div>
            <div className='p-2'>
                <label htmlFor="desc" className=' text-gray-700 text-sm font-bold mb-2'>Description: </label>
                <textarea id="desc" name="desc" className='bg-gray-200 w-full p-2' value={todo.desc} onChange={handleChange} />
            </div>
            <div className='p-2 text-center'>
                <button type="submit" className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Todo</button>
            </div>
        </form>
    </div>
)
}

export default Newtodo
