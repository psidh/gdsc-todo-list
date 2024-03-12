import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
// import ShowTodo from './components/ShowTodo';
function App() {
  return (
    <>
      <div>
        <Header />
        <div className='h-screen bg-gradient-to-r from-[#212121] via-[#2d2d2d] to-black'>
          <Title />
          <AddTodo />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
