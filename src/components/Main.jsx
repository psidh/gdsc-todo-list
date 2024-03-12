import '@fontsource-variable/plus-jakarta-sans';
import AddTodo from './AddTodo';
export default function Main() {
  return (
    <div className='bg-gradient-to-r from-[#212121] via-[#2d2d2d] to-black py-24 flex flex-col items-center text-white h-screen'>
      <h1
        className='text-6xl font-bold text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-500/70 to-white'
      >
        Task Tracker |
      </h1>
      <h1 className='text-3xl font-light text-white pt-16'>
        Build consistency | Achieve great heights
      </h1>

      <AddTodo />
    </div>
  );
}
