import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function adding() {
    setTodo('');
    setTodos([...todos, todo]);
  }

  return (
    <main>
      {/* The top component */}
      <div className='p-16 bg-black text-white flex justify-between items-center'>
        <h1 className='p-4 text-orange-500 text-3xl'>Sidharth</h1>

        <div className='space-x-6'>
          <button className='p-4 bg-blue-500 text-white '>Login</button>
          <button className='p-4 bg-green-500 text-white'>Sign Up</button>
        </div>
      </div>

      <div className='bg-blue-950 p-16 flex justify-center items-center space-x-8'>
        <input
          type='text'
          title='todo'
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          className='py-4 bg-gray-700 text-white pl-6 rounded-2xl'
        />
        <button
          onClick={adding}
          className='py-4 px-8 bg-blue-600  text-white rounded-full'
        >
          Add todo
        </button>
      </div>

      <div className='p-6 text-3xl'>{todos}</div>
    </main>
  );
}

export default App;
