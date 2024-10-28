import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/Signin';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  );
}
