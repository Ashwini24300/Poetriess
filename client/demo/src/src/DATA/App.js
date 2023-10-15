import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Components/Register';
import Home from './Components/Home';
import MyQuotes from './Components/MyQuotes';
import AddNewQuote from './Components/addNewQuote';
import Profile from './Components/Profile';
import Header from './Header';
import Logout from './logout';

function App() {
  return (
   <>
    {/* <Link to="/home">Home</Link> */}
   
   <BrowserRouter>
   <Routes>
    <Route exact path="/" Component={Login}></Route>
    <Route exact path="/register" Component={Register}></Route>
    <Route exact path="/home" Component={Home}></Route>
    <Route exact path="/my-quotes" Component={MyQuotes}></Route>
    <Route exact path="/addNewQuote" Component={AddNewQuote}></Route>
    <Route exact path="/profile" Component={Profile}></Route>
    <Route exact path="/logout" Component={Logout}></Route>







   </Routes>
   </BrowserRouter>
  
   </>
  );
}

export default App;
