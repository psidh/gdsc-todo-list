import { useState, useEffect } from 'react';

export default function AddTodo() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [deletingIndex, setDeletingIndex] = useState(null);

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
    <div className='flex flex-col items-center justify-center  p-16  bg-gradient-to-r from-[#212121] via-[#161616] to-black text-white'>
      <div className='flex items-center justify-center space-x-3'>
        <textarea
          rows={1}
          cols={30}
          type='text'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          title='todo'
          className='py-4 px-8  rounded-xl 
          transition-all duration-500
          border bg-transparent border-[#555555] focus:outline-none 
          focus:rounded-3xl focus:border-[#afafaf] hover:shadow-lg shadow-gray-300'
        />
        <button
          onClick={addTodo}
          className='py-5 px-16 hover:px-14 text-2xl font-bold rounded-lg 
          hover:bg-opacity-70 
          focus:outline-none hover:bg-[#121212] 
          border border-[#575757] bg-white text-black hover:text-white 
          hover:rounded-2xl transition-all  duration-700'
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`mt-12 space-x-4 p-4 border border-[#4d4d4d] rounded-lg ${
              index === deletingIndex ? 'fade-out' : ''
            }`}
          >
            <input
              type='text'
              value={todo}
              className='py-2 pl-4 bg-transparent focus:outline-none shadow-teal-800 text-xl'
              onChange={(e) => updateTodo(index, e.target.value)}
            />
            <button
              onClick={() => {
                setDeletingIndex(index); // Set the index of the item being deleted
                setTimeout(() => {
                  deleteTodo(index); // Delete the item after the animation
                  setDeletingIndex(null); // Reset the deletingIndex state
                }, 500); // Wait for the animation duration
              }}
              className='
      py-5 px-8 hover:-translate-y-2 hover:px-10 text-2xl font-bold rounded-lg 
      hover:bg-opacity-70 
      focus:outline-none bg-green-500
      text-white
      hover:rounded-2xl transition-all  duration-500'
            >
              Done
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
