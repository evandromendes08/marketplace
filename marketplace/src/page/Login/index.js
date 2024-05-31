import { Link } from "react-router-dom";

const Login = () =>{
    return (
        <div>
        <h1>Minha Tela de Login</h1>
        <a href="/">Voltar para Home</a>
        <br/>
        <Link to='/'>VÁ PARA HOME PAGE</Link>
    </div>
    )
}

export default Login;