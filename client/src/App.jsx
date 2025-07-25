import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/About';
import Collaborate from './pages/Collaborate';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>                                {/*to include hearder in every pages*/}
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/sign-in' element={<Signin/>} />
  <Route path='/sign-up' element={<Signup/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/collaborate' element={<Collaborate/>} />
  <Route path='/profile' element={<Profile/>} />
  <Route path='/register' element={<Register/>} />

  </Routes>
  </BrowserRouter>
}
