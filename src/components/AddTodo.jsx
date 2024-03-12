import { useState, useEffect } from 'react';

export default function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, todoText]);
      setTodoText('');
    }
  };

  const updateTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='flex flex-col items-center justify-center  p-16  bg-gradient-to-r from-[#212121] via-[#2d2d2d] to-black text-white'>
      <div className='flex items-center justify-center space-x-3'>
        <textarea
          rows={1}
          cols={30}
          type='text'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          title='todo'
          className='py-4 px-8  rounded-xl border bg-transparent border-[#8b8b8b] focus:outline-none shadow-teal-800'
        />
        <button
          onClick={addTodo}
          className='py-4 px-8 rounded-lg hover:bg-opacity-70 focus:outline-none bg-green-600'
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div
            key={index}
            className='mt-12 space-x-4 p-4 border border-[#4d4d4d] rounded-lg'
          >
            <input
              type='text'
              value={todo}
              className='py-2 pl-4 bg-transparent focus:outline-none shadow-teal-800'
              onChange={(e) => updateTodo(index, e.target.value)}
            />
            <button
              onClick={() => deleteTodo(index)}
              className='py-4 px-8 rounded-lg hover:bg-opacity-70 focus:outline-none bg-red-600'
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
