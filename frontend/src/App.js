import './App.css';
import { Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
   <div className="App">
    <Route path="/" component={Homepage} exact/>
    <Route path="/usersdata" component={Header} />
    <Route path="/usersdata" component={Home} />
    <Route path="/cart" component={Cart} />
     
     
     {/* <Route path="/usersdata" component={Usersdata} /> */}
    </div>
  )
}

export default App;
