import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import AllRouter from './router/AllRouter';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       
       <Link to="/" >home</Link>
       <br/>

       <Link to="/cart" >cart</Link>
       <br/>

      <AllRouter/>
    </div>
  );
}

export default App;
