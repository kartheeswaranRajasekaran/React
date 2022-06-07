import './App.css';
import './assets/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/HomePage/Homepage';
import About from './components/About/About';
import Rules from './components/Rules/Rules';
import Price from './components/Price/Price';
import Search from './components/Search/Search';
import AdminHeader from './components/AdminHeader/AdminHeader';
import AdminSearch from './components/AdminSearch/AdminSearch';
import AddBook from './components/AddBook/AddBook';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<><Header/><Home/></>}/>
          <Route path='/about' element={<><Header/><About/></>}/>
          <Route path='/rules' element={<><Header/><Rules/></>}/>
          <Route path='/price' element={<><Header/><Price/></>}/>
          <Route path='/search' element={<><Header/><Search/></>}/>
          <Route path='/adminHome' element={<><AdminHeader/><Home/></>}/>
          <Route path='/adminAbout' element={<><AdminHeader/><About/></>}/>
          <Route path='/adminRules' element={<><AdminHeader/><Rules/></>}/>
          <Route path='/adminPrice' element={<><AdminHeader/><Price/></>}/>
          <Route path='/adminSearch' element={<><AdminHeader/><AdminSearch/></>}/>
          <Route path='/addBook' element={<AddBook/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;