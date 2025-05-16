import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../Pages/login';
import SignUP from '../Pages/signup';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUP />}></Route>
    </Routes>
  );
};

export default App;
