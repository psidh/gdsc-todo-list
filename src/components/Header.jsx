export default function Header() {
  return (
    <div className='p-16 bg-black text-white flex justify-between items-center'>
      <h1 className='p-4 text-orange-500 text-3xl'>Sidharth</h1>

      <div className='space-x-6'>
        <button className='p-4 bg-blue-500 text-white '>Login</button>
        <button className='p-4 bg-green-500 text-white'>Sign Up</button>
      </div>
    </div>
  );
}


