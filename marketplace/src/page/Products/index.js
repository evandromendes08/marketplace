import { Link } from "react-router-dom";

const Products = () => {
    return(
        <div>
            <h2>Lista de Produtos</h2>
            <p>Abaixo Lista de Produtos</p>
            <Link to="/product">Link para o produto</Link>
            <br/>
            <Link to="/product/1">Link para o produto 1</Link>
            <br/>
            <Link to="/product/2">Link para o produto 2</Link>
            <br/>
            <Link to="/product/3">Link para o produto 3</Link>
            <br/>
        </div>
    )
}

export default Products;