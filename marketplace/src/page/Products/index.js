import { Link, useSearchParams, useLocation } from "react-router-dom";
import './style.css';

const Products = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const {state} = useLocation();
   
    return(
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo Lista de Produtos</p>
            <p>Usuário cadastrado recentemente! {state}</p>

            <p>Página: {searchParams.get('page')}</p>
            <Link to="/product">Link para o produto</Link>
            <br/>
            <Link to="/product/1/reviews">Link para os Reviews</Link>
            <br/>
            <Link to="/product/1" state={'10S20S30S'}>Link para o produto 1</Link>
            <br/>
            <Link to="/product/2">Link para o produto 2</Link>
            <br/>
            <Link to="/product/3">Link para o produto 3</Link>
            <br/>

            <ul className="pagination">
                <li><button onClick={() => setSearchParams({page:1})}>1</button></li>
                <li><button onClick={() => setSearchParams({page:2})}>2</button></li>
                <li><button onClick={() => setSearchParams({page:3})}>3</button></li>
                <li><button onClick={() => setSearchParams({page:4})}>4</button></li>
            </ul>
        </div>
    )
}

export default Products;