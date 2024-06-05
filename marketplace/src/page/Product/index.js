import { Outlet, useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    return(
        <div>
            <h2>Tela interna de Produtos</h2>
            <p>O id do produto é {id}</p>
            <Outlet/> {/* JOGA O REVIEW DENTRO DE UMA DIV SÓ */}
            
        </div>
    )
}

export default Product;