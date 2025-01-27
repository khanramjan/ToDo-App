import React from 'react'
import Home from './components/Home'
import Newtodo from './components/Newtodo'

const App = () => {
  return (
    <>
    <div className='flex justify-center mt-5'>
    <h2 className='bg-green-700 max-w-lg w-full rounded-md py-2 font-bold font-serif mb-4 shadow-md text-center'>To Do App</h2>
    </div>
    <Home />
    </>
  )
}

export default App
