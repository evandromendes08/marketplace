import { Link } from "react-router-dom";
import './style.css';

const NavMenu = () => {
    return (
        <nav>
            <h1>MarketPlace</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/registro'>Registro</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;