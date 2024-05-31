import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
//import NavMenu from './components/NavMenu';
import Products from './page/Products';
import Product from './page/Product';

function App() {
  return (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        </Routes>
  );
}

export default App;
