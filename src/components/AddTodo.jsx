import { useState } from 'react';
export default function AddTodo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function adding() {
    setTodo('');
    setTodos([...todos, todo]);
  }
  return (
    <div>
      <div className='bg-blue-950 p-16 flex justify-center items-center space-x-8'>
        <input
          type='text'
          title='todo'
          value={todo}
          onChange={(event) => {
            console.log(event.target.value);
            setTodo(event.target.value);
          }}
          className='py-4 bg-gray-700 text-white pl-6 rounded-2xl'
        />
        <button
          onClick={adding}
          className='py-4 px-8 bg-blue-600  text-white rounded-full'
        >
          Add todo
        </button>
      </div>
      <div className='p-6 text-3xl '>
        {todos.map((todo, index) => (
          <div key={index}>
            <h1 className='my-2 bg-orange-500 px-8 py-2 rounded-lg text-white'>
              {todo}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
