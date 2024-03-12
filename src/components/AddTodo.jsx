import { useState } from 'react';

export default function AddTodo() {
  const [todo, setTodo] = useState();

  const 
  return (
    <div className='flex items-center justify-center space-x-3 p-16'>
      <input
        type='text'
        title='todo'
        className='py-4 px-8 w-full rounded-xl border bg-black border-[#8b8b8b] focus:outline-none shadow-teal-800'
      />
      <button className='py-4 px-8 rounded-lg hover:bg-opacity-70 focus:outline-none bg-[#616161]'>
        Add
      </button>
    </div>
  );
}
