import './App.css';

function App() {
  return (
    <div className='m-16  '>
      <button className='m-14 py-4 px-8 rounded-full bg-green-500'>
        make me green
      </button>
      <button
        onClick={() => {
          alert('big statmene calling devs');
        }}
        className='m-14 py-4 px-8 rounded-full bg-red-500'
      >
        HI there
      </button>
    </div>
  );
}

export default App;
