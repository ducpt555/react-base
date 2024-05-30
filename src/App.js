import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className="main-container">
        {/* main */}
      </div>
      <div className='app-content'>
        <Outlet/>
      </div>
    </div>
  );
};

export default App;
