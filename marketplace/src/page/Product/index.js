import { Outlet, useLocation, useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    const {state} = useLocation();
    console.log(state);

    return(
        <div>
            <h2>Tela interna de Produtos</h2>
            <p>O id do produto é {id}</p>
            <p>A matricula do produto é: {state}</p>
            <Outlet/> {/* JOGA O REVIEW DENTRO DE UMA DIV SÓ */}
            
        </div>
    )
}

export default Product;