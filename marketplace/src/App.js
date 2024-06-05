import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
//import NavMenu from './components/NavMenu';
import Products from './page/Products';
import Product from './page/Product';
import NotFound from './page/NotFound';
import Registro from './page/Registro';
import ProductReviews from './page/ProductReviews';

function App() {
  return (
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}>
          <Route path='reviews' element={<ProductReviews/>}/>  {/* //ROTA ACIMA FILHA DO PRODUCT/ */} 
        </Route> 
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/*' element={<NotFound/>}/>
        </Routes>
  );
}

export default App;
