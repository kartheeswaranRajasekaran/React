import './App.css';

import './assets/font-awesome/css/font-awesome.min.css';

import Header from '../src/components/Header/Header';
import Login from './components/Login/Login'
import Home from './components/Homepage/Homepage'


import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  return (

      <div>

        <BrowserRouter>

        <Routes>

          <Route path='/header' element={<Header/>}/>

          <Route path='/login' element={<Login/>}/>

        </Routes>

        </BrowserRouter>

      </div>

  );

}

export default App;