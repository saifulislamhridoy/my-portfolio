
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
   <div className='bg-gradient-to-r from-green to-blue-400'>
     <div className="grid grid-cols-12 gap-6 px-5 lg:px-12 my-14 sm:px-20 md:px-32">
      <div className='col-span-12 lg:col-span-3 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl'>
        <Sidebar></Sidebar>
      </div>
      <div className='col-span-12 lg:col-span-9 bg-white rounded-2xl flex flex-col overflow-hidden dark:bg-dark-500'>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </div>
   </div>
  );
}

export default App;
