// Supports weights 200-800

export default function Header() {
  return (
    <div className='flex justify-between p-12 bg-black text-white'>
      <div>
        <h1 className='text-2xl font-semibold'>Task Tracker</h1>
      </div>

      <div className='flex justify-between px-8 space-x-8'>
        <a href='/about'>About</a>
        <a href='/about'>Add</a>
        <a href='/about'>New</a>
        <a href='/about'>About</a>
      </div>
    </div>
  );
}
