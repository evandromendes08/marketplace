import { useNavigate } from "react-router-dom";

const Registro = () =>{
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário Enviado')
        navigate('/products')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nome: </label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email"/>
            </div>
            <div>
                <label htmlFor="">Senha: </label>
                <input type="password"/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Registro